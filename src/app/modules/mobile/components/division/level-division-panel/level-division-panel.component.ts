import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ILevelListNode } from 'src/app/common/components/level-list-panel/level-list-panel.model';
import { DivisionType } from 'src/app/common/enums/division/division-type.enum';
import { Division } from 'src/app/common/network/models/mobile_service/division.model';
import { LevelDivisionPanelBusiness } from './level-division-panel.business';

@Component({
  selector: 'level-division-panel',
  templateUrl: './level-division-panel.component.html',
  styleUrls: ['./level-division-panel.component.less'],
  providers: [LevelDivisionPanelBusiness],
})
export class LevelDivisionPanelComponent implements OnInit {
  @Input() cannull: boolean = true;
  @Input() nulllanguage = '请选择';
  @Input() selected?: ILevelListNode;
  @Output() selectedChange: EventEmitter<ILevelListNode> = new EventEmitter();

  constructor(private business: LevelDivisionPanelBusiness) {}
  opened = false;
  datas: ILevelListNode[] = [];

  ngOnInit(): void {
    this.loadData();
  }

  rename = false;

  async onchange(node?: ILevelListNode) {
    try {
      if (node) {
        let division = node as Division;
        if (division.DivisionType === DivisionType.Committees) {
          this.opened = false;
          return;
        }
      }
      this.loadData(node);
    } finally {
      this.selectedChange.emit(node);
    }
  }

  loadData(node?: ILevelListNode) {
    this.business.load(node).then((x) => {
      this.datas = x;
    });
  }
}
