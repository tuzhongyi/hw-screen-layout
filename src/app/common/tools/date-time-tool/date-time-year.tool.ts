import { Duration } from './duration.model';

export class DateTimeYearTool {
  all(date: Date): Duration {
    let duration = {
      begin: new Date(),
      end: new Date(),
    };
    duration.begin = new Date(date.getFullYear(), 0, 1);
    let next = new Date(duration.begin.getTime());
    next.setFullYear(next.getFullYear() + 1);
    next.setMilliseconds(-1);
    duration.end = next;
    return duration;
  }
}
