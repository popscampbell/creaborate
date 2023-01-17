/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { UserNotification } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserNotificationUpdateFormInputValues = {
    username?: string;
    message?: string;
    level?: string;
    displayedAt?: string;
    heading?: string;
};
export declare type UserNotificationUpdateFormValidationValues = {
    username?: ValidationFunction<string>;
    message?: ValidationFunction<string>;
    level?: ValidationFunction<string>;
    displayedAt?: ValidationFunction<string>;
    heading?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserNotificationUpdateFormOverridesProps = {
    UserNotificationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    message?: PrimitiveOverrideProps<TextFieldProps>;
    level?: PrimitiveOverrideProps<SelectFieldProps>;
    displayedAt?: PrimitiveOverrideProps<TextFieldProps>;
    heading?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserNotificationUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserNotificationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userNotification?: UserNotification;
    onSubmit?: (fields: UserNotificationUpdateFormInputValues) => UserNotificationUpdateFormInputValues;
    onSuccess?: (fields: UserNotificationUpdateFormInputValues) => void;
    onError?: (fields: UserNotificationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserNotificationUpdateFormInputValues) => UserNotificationUpdateFormInputValues;
    onValidate?: UserNotificationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserNotificationUpdateForm(props: UserNotificationUpdateFormProps): React.ReactElement;
