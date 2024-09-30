import { Duration } from './duration.model';

export class DateTimeDayTool {
  before(date: Date, day: number) {
    let begin = new Date(date.getTime());
    begin.setDate(begin.getDate() - day);
    begin.setHours(0, 0, 0, 0);
    let end = new Date(date.getTime());
    end.setHours(23, 59, 59, 999);
    return {
      begin: begin,
      end: end,
    };
  }

  all(date: Date): Duration {
    let duration = {
      begin: new Date(),
      end: new Date(),
    };
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    duration.begin = new Date(year, month, day);
    let next = new Date(duration.begin.getTime());
    next.setDate(next.getDate() + 1);
    next.setMilliseconds(-1);
    duration.end = next;
    return duration;
  }
}
