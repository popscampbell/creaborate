/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Expense } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ExpenseUpdateFormInputValues = {
    Name?: string;
    Description?: string;
    Amount?: number;
    IncurredDate?: string;
    IsRecurring?: boolean;
};
export declare type ExpenseUpdateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Description?: ValidationFunction<string>;
    Amount?: ValidationFunction<number>;
    IncurredDate?: ValidationFunction<string>;
    IsRecurring?: ValidationFunction<boolean>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ExpenseUpdateFormOverridesProps = {
    ExpenseUpdateFormGrid?: FormProps<GridProps>;
    Name?: FormProps<TextFieldProps>;
    Description?: FormProps<TextFieldProps>;
    Amount?: FormProps<TextFieldProps>;
    IncurredDate?: FormProps<TextFieldProps>;
    IsRecurring?: FormProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ExpenseUpdateFormProps = React.PropsWithChildren<{
    overrides?: ExpenseUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    expense?: Expense;
    onSubmit?: (fields: ExpenseUpdateFormInputValues) => ExpenseUpdateFormInputValues;
    onSuccess?: (fields: ExpenseUpdateFormInputValues) => void;
    onError?: (fields: ExpenseUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ExpenseUpdateFormInputValues) => ExpenseUpdateFormInputValues;
    onValidate?: ExpenseUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ExpenseUpdateForm(props: ExpenseUpdateFormProps): React.ReactElement;
