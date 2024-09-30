import { formatDate } from '@angular/common';
import {
  AfterContentInit,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
} from '@angular/core';
import { DateTimeTool } from '../../tools/date-time-tool/datetime.tool';
import { Language } from '../../tools/language-tool/language.tool';

declare let $: any;

@Directive({
  selector: '[DateTimePicker]',
})
export class DateTimePickerDirective
  implements AfterContentInit, OnDestroy, OnChanges
{
  @Input('format') format = Language.yyyyMMdd;

  // @Input('changeDate') changeDate: (val: any) => void;
  @Input('startView') startView: DateTimePickerView = DateTimePickerView.month;
  @Input('minView') minView: DateTimePickerView = DateTimePickerView.month;
  @Input('week') week: boolean = false;

  private _date: Date = new Date();
  public get date(): Date {
    return this._date;
  }
  @Input('date')
  public set date(v: Date) {
    this._date = v;
    this.dateChange.emit(v);
  }

  @Output() dateChange: EventEmitter<Date> = new EventEmitter();

  constructor(e: ElementRef) {
    this.ele = e.nativeElement;
  }
  changing = false;
  private ele: HTMLInputElement;
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    // this.reInit(this.startView, this.minView, this.format, this.value);
    if (this.changing == false) {
      this.reInit(
        this.startView,
        this.minView,
        this.format,
        this.date,
        this.week
      );
    }
    this.changing = false;
  }
  ngOnDestroy(): void {
    $(this.ele).datetimepicker('remove');
  }

  set setStartDate(val: string | Date) {
    $(this.ele).datetimepicker('update');
  }
  ngAfterContentInit() {}

  reInit(
    startView: number,
    minView: number,
    format: string,
    value: Date,
    week?: boolean
  ) {
    $(this.ele).val('');
    $(this.ele).datetimepicker('remove').off('changeDate').off('show');
    if (week) {
      $(this.ele)
        .datetimepicker({
          format: format,
          weekStart: 1,
          autoclose: true,
          startView: startView,
          minView: minView,
          language: 'zh-CN',
          forceParse: false,
          initialDate: value,
        })
        .on('changeDate', (ev: { date: Date }) => {
          this.date = ev.date;
          this.changing = true;
          const week_ = DateTimeTool.week.all(ev.date);
          $(this.ele).val(
            `${formatDate(week_.begin, 'yyyy年MM月dd日', 'en')} 至 ${formatDate(
              week_.end,
              'yyyy年MM月dd日',
              'en'
            )}`
          );
        })
        .on('show', (ev: { date: any }) => {
          const dayDom = $('.datetimepicker-days');
          dayDom.find('.week-tr').removeClass('week-tr');
          dayDom.addClass('week');
          var tbody = dayDom.find('tbody'),
            trs = tbody.find('tr'),
            d = formatDate(ev.date, 'dd', 'en');
          d = parseInt(d) + ''; //console.log(d);

          $(trs).each(function (index: number, element: any) {
            var tds = $(element).children();
            $(tds).each(function (i: number, el: any) {
              if (
                $(el).hasClass('old') == false &&
                $(el).hasClass('new') == false &&
                $(el).text() == d
              ) {
                $(el).parent().addClass('week-tr');
              }
            });
          });
        });
      const week_ = DateTimeTool.week.all(new Date(value));
      $(this.ele).val(
        `${formatDate(week_.begin, 'yyyy年MM月dd日', 'en')} 至 ${formatDate(
          week_.end,
          'yyyy年MM月dd日',
          'en'
        )}`
      );
    } else {
      $(this.ele)
        .datetimepicker({
          format: format,
          weekStart: 1,
          autoclose: true,
          startView: startView,
          minView: minView,
          language: 'zh-CN',
          forceParse: false,
          initialDate: value,
        })
        .on('changeDate', (ev: { date: Date | undefined }) => {
          if (ev.date) {
            this.date = ev.date;
          }
          this.changing = true;
        })
        .on('show', (ev: any) => {
          const dayDom = $('.datetimepicker-days');
          dayDom.find('.week-tr').removeClass('week-tr');
        });
      $(this.ele).val(formatDate(value, this.format, 'en'));
    }
  }
}

@Directive({
  selector: '[DateTimePickerMirror]',
})
export class DateTimePickerMirrorDirective extends DateTimePickerDirective {}

/**
 * 0 or 'hour' for the hour view
 * 1 or 'day' for the day view
 * 2 or 'month' for month view (the default)
 * 3 or 'year' for the 12-month overview
 * 4 or 'decade' for the 10-year overview. Useful for date-of-birth datetimepickers.
 */
export enum DateTimePickerView {
  /** 0 or 'hour' for the hour view */
  hour = 0,
  /** 1 or 'day' for the day view */
  day = 1,
  /** 2 or 'month' for month view (the default) */
  month = 2,
  /** 3 or 'year' for the 12-month overview */
  year = 3,
  /** 4 or 'decade' for the 10-year overview. Useful for date-of-birth datetimepickers. */
  decade = 4,
}

export class DateTimePickerConfig {
  constructor(
    opts: {
      view?: DateTimePickerView;
      week?: boolean;
      format?: string;
    } = {}
  ) {
    if (opts.format) {
      this.format = opts.format;
    }
    if (opts.view !== undefined) {
      this.view = opts.view;
    }
    if (opts.week !== undefined) {
      this.week = opts.week;
    }
  }
  view: DateTimePickerView = DateTimePickerView.month;
  week = false;
  format = Language.yyyyMMdd;
}
