import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractPagedTable } from 'src/app/common/components/table/table-paged.abstract';
import { Screen } from 'src/app/common/network/models/mobile_service/screen.model';
import { ScreenModel } from '../../../converters/screen.converter';
import { ScreenTableBusiness } from './screen-table.business';
import { ScreenTableArgs } from './screen-table.model';

@Component({
  selector: 'mobile-screen-table',
  templateUrl: './screen-table.component.html',
  styleUrls: [
    '../../../../../common/components/table/less/table-paged.less',
    './screen-table.component.less',
  ],
  providers: [ScreenTableBusiness],
})
export class ScreenTableComponent
  extends AbstractPagedTable<ScreenModel>
  implements OnInit
{
  @Input('load') _load?: EventEmitter<ScreenTableArgs>;
  @Input() args?: ScreenTableArgs;
  @Output() update = new EventEmitter<Screen>();
  @Output() delete = new EventEmitter<Screen>();
  @Output() layout = new EventEmitter<Screen>();

  constructor(private business: ScreenTableBusiness) {
    super();
  }

  widths = [];
  selected?: ScreenModel;

  ngOnInit(): void {
    if (this._load) {
      this._load.subscribe(() => {});
    }
    if (this.args) {
      this.load(1, this.pageSize, this.args);
    }
  }

  override async load(
    index: number = 1,
    size: number = this.pageSize,
    args: ScreenTableArgs
  ) {
    this.loading = true;

    this.business
      .load(index, size, args)
      .then((paged) => {
        this.datas = paged.Data;
        this.page = paged.Page;
      })
      .finally(() => {
        this.loading = false;
      });
  }
  onselect(e: Event, item: ScreenModel) {
    if (this.selected === item) {
      this.selected = undefined;
    } else {
      this.selected = item;
    }
  }
  onupdate(e: Event, item: ScreenModel) {
    if (this.selected === item) {
      e.stopImmediatePropagation();
    }
    this.update.emit(item);
  }
  ondelete(e: Event, item: ScreenModel) {
    if (this.selected === item) {
      e.stopImmediatePropagation();
    }
    this.delete.emit(item);
  }
  onlayout(e: Event, item: ScreenModel) {
    if (this.selected === item) {
      e.stopImmediatePropagation();
    }
    this.layout.emit(item);
  }
}
