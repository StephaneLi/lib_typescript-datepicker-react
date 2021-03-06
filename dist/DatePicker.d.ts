/// <reference types="react" />
import "./style.scss";
export declare type DatePickerProps = {
    label: string;
    name: string;
    errorMessage?: string;
    error?: boolean;
    value?: string;
    lang?: string;
    year?: number;
    month?: number;
    day?: number;
    zIndex?: number;
    intervalYearsSelection?: number[];
    elevationPicker?: boolean;
    headerPickerColor?: string;
    textColor?: string;
    focusColor?: string;
    errorColor?: string;
    borderColor?: string;
    borderRadius?: string;
    className?: string;
    onSelect?: CallableFunction;
};
export declare type DatePickerResult = {
    date: Date;
    value: string;
};
declare const DatePicker: React.FunctionComponent<DatePickerProps>;
export default DatePicker;
