/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserNotificationCreateFormInputValues = {
    username?: string;
    message?: string;
    level?: string;
    displayedAt?: string;
    heading?: string;
};
export declare type UserNotificationCreateFormValidationValues = {
    username?: ValidationFunction<string>;
    message?: ValidationFunction<string>;
    level?: ValidationFunction<string>;
    displayedAt?: ValidationFunction<string>;
    heading?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserNotificationCreateFormOverridesProps = {
    UserNotificationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    message?: PrimitiveOverrideProps<TextFieldProps>;
    level?: PrimitiveOverrideProps<SelectFieldProps>;
    displayedAt?: PrimitiveOverrideProps<TextFieldProps>;
    heading?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserNotificationCreateFormProps = React.PropsWithChildren<{
    overrides?: UserNotificationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserNotificationCreateFormInputValues) => UserNotificationCreateFormInputValues;
    onSuccess?: (fields: UserNotificationCreateFormInputValues) => void;
    onError?: (fields: UserNotificationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserNotificationCreateFormInputValues) => UserNotificationCreateFormInputValues;
    onValidate?: UserNotificationCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserNotificationCreateForm(props: UserNotificationCreateFormProps): React.ReactElement;
