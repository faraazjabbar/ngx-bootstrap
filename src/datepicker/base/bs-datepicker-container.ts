// datepicker container component
/* tslint:disable:no-empty */
import { BsCustomDates } from '../themes/bs/bs-custom-dates-view.component';
import { BsDatepickerEffects } from '../reducer/bs-datepicker.effects';
import { Observable } from 'rxjs';
import {
  BsDatepickerViewMode,
  BsNavigationEvent,
  CalendarCellViewModel,
  CellHoverEvent,
  DatepickerRenderOptions,
  DatepickerDateCustomClasses,
  DaysCalendarViewModel,
  DayViewModel,
  MonthsCalendarViewModel,
  WeekViewModel,
  YearsCalendarViewModel
} from '../models';

export abstract class BsDatepickerAbstractComponent {
  containerClass: string;
  isOtherMonthsActive: boolean;
  showTodayBtn: boolean;
  todayPos: string;
  clearPos: string;
  showClearBtn: boolean;

  _effects: BsDatepickerEffects;
  customRanges: BsCustomDates[] = [];
  chosenRange: Date[] = [];

  set minDate(value: Date) {
    this._effects.setMinDate(value);
  }

  set maxDate(value: Date) {
    this._effects.setMaxDate(value);
  }
  set daysDisabled(value: number[]) {
    this._effects.setDaysDisabled(value);
  }
  set datesDisabled(value: Date[]) {
    this._effects.setDatesDisabled(value);
  }

  set datesEnabled(value: Date[]) {
    this._effects.setDatesEnabled(value);
  }

  set isDisabled(value: boolean) {
    this._effects.setDisabled(value);
  }

  set dateCustomClasses(value: DatepickerDateCustomClasses[]) {
    this._effects.setDateCustomClasses(value);
  }

  viewMode: Observable<BsDatepickerViewMode>;
  daysCalendar: Observable<DaysCalendarViewModel[]>;
  monthsCalendar: Observable<MonthsCalendarViewModel[]>;
  yearsCalendar: Observable<YearsCalendarViewModel[]>;
  options: Observable<DatepickerRenderOptions>;

  setViewMode(event: BsDatepickerViewMode): void {}

  navigateTo(event: BsNavigationEvent): void {}

  dayHoverHandler(event: CellHoverEvent): void {}

  weekHoverHandler(event: WeekViewModel): void {}

  monthHoverHandler(event: CellHoverEvent): void {}

  yearHoverHandler(event: CellHoverEvent): void {}

  daySelectHandler(day: DayViewModel): void {}

  monthSelectHandler(event: CalendarCellViewModel): void {}

  yearSelectHandler(event: CalendarCellViewModel): void {}

  setRangeOnCalendar(dates: BsCustomDates): void {}

  setToday(): void {}

  clearDate(): void {}

    /* tslint:disable-next-line: no-any */
  _stopPropagation(event: any): void {
    event.stopPropagation();
  }
}
