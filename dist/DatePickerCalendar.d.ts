import React from "react";
import "./style.scss";
export declare type DatePickerCalendarProps = {
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
declare const DatePickerCalendar: React.FunctionComponent<DatePickerCalendarProps>;
export default DatePickerCalendar;
