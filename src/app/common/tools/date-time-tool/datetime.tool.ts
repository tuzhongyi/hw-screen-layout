import { DateTimeEqualsTool } from './date-time-equals.tool';
import { DateTimeYearTool } from './date-time-year.tool';
import { DateTimeDayTool } from './datetime-day.tool';
import { DateTimeMonthTool } from './datetime-month.tool';
import { DateTimeWeekTool } from './datetime-week.tool';
import { Duration } from './duration.model';

export class DateTimeTool {
  static formatter = {
    yyyyMMddHHmmss: 'yyyy-MM-dd HH:mm:ss',
    yyyyMMdd: 'yyyy-MM-dd',
    HHmmss: 'HH:mm:ss',
    HHmm: 'HH:mm',
  };

  static day = new DateTimeDayTool();
  static week = new DateTimeWeekTool();
  static month = new DateTimeMonthTool();
  static year = new DateTimeYearTool();
  static is = new DateTimeEqualsTool();

  static beforeOrAfter(date: Date, seconds: number = 30): Duration {
    let duration = {
      begin: new Date(),
      end: new Date(),
    };

    let begin = new Date(date.getTime());
    begin.setSeconds(begin.getSeconds() - seconds);
    duration.begin = new Date(begin.getTime());

    let end = new Date(date.getTime());
    end.setSeconds(end.getSeconds() + seconds);
    duration.end = end;

    return duration;
  }
  static second(date: Date, before: number, after: number): Duration {
    let duration = {
      begin: new Date(date.getTime()),
      end: new Date(date.getTime()),
    };
    duration.begin.setSeconds(duration.begin.getSeconds() + before);
    duration.end.setSeconds(duration.end.getSeconds() + after);
    return duration;
  }
  static before(date: Date, seconds: number = 30): Duration {
    let duration = {
      begin: new Date(),
      end: new Date(date.getTime()),
    };

    let begin = new Date(date.getTime());
    begin.setSeconds(begin.getSeconds() - seconds);
    duration.begin = new Date(begin.getTime());

    return duration;
  }
  static beforeDay(date: Date, day: number = 7): Duration {
    let duration = {
      begin: new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() - day
      ),
      end: new Date(date.getFullYear(), date.getMonth(), date.getDate()),
    };
    duration.end.setMilliseconds(-1);
    return duration;
  }
}
