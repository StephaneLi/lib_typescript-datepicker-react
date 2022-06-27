import { FunctionComponent } from "react";
import "./style.scss";
declare type DatePickerCalendarProps = {
    className?: string;
    color?: string;
    textColor?: string;
    elevation?: boolean;
    lang?: string;
    year?: number;
    month?: number;
    day?: number;
    intervalYearsSelection?: number[];
    onSelect?: (date: Date, value: string) => void;
    onClose?: CallableFunction;
};
declare const DatePickerCalendar: FunctionComponent<DatePickerCalendarProps>;
export default DatePickerCalendar;
