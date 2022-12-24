/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserProfileCreateFormInputValues = {
    Visibility?: string;
    Username?: string;
    Name?: string;
    Tagline?: string;
    Skills?: string[];
    Interests?: string[];
    About?: string;
    Location?: string;
};
export declare type UserProfileCreateFormValidationValues = {
    Visibility?: ValidationFunction<string>;
    Username?: ValidationFunction<string>;
    Name?: ValidationFunction<string>;
    Tagline?: ValidationFunction<string>;
    Skills?: ValidationFunction<string>;
    Interests?: ValidationFunction<string>;
    About?: ValidationFunction<string>;
    Location?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserProfileCreateFormOverridesProps = {
    UserProfileCreateFormGrid?: FormProps<GridProps>;
    Visibility?: FormProps<SelectFieldProps>;
    Username?: FormProps<TextFieldProps>;
    Name?: FormProps<TextFieldProps>;
    Tagline?: FormProps<TextFieldProps>;
    Skills?: FormProps<TextFieldProps>;
    Interests?: FormProps<TextFieldProps>;
    About?: FormProps<TextFieldProps>;
    Location?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserProfileCreateFormProps = React.PropsWithChildren<{
    overrides?: UserProfileCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserProfileCreateFormInputValues) => UserProfileCreateFormInputValues;
    onSuccess?: (fields: UserProfileCreateFormInputValues) => void;
    onError?: (fields: UserProfileCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: UserProfileCreateFormInputValues) => UserProfileCreateFormInputValues;
    onValidate?: UserProfileCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserProfileCreateForm(props: UserProfileCreateFormProps): React.ReactElement;
