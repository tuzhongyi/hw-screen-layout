import { DateTimeMonthWeekTool } from './datetime-month-week.tool';
import { Duration } from './duration.model';

export class DateTimeMonthTool {
  week = new DateTimeMonthWeekTool();

  last(date: Date) {
    let next = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    next.setMilliseconds(-1);
    return next.getDate();
  }

  all(date: Date): Duration {
    let duration = {
      begin: new Date(),
      end: new Date(),
    };
    duration.begin = new Date(date.getFullYear(), date.getMonth(), 1);
    let next = new Date(duration.begin.getTime());
    next.setMonth(next.getMonth() + 1);
    next.setMilliseconds(-1);
    duration.end = next;
    return duration;
  }
}
