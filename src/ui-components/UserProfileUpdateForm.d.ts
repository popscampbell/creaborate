/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { UserProfile } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserProfileUpdateFormInputValues = {
    Username?: string;
    Name?: string;
    Tagline?: string;
    Skills?: string[];
    Interests?: string[];
    About?: string;
    Location?: string;
};
export declare type UserProfileUpdateFormValidationValues = {
    Username?: ValidationFunction<string>;
    Name?: ValidationFunction<string>;
    Tagline?: ValidationFunction<string>;
    Skills?: ValidationFunction<string>;
    Interests?: ValidationFunction<string>;
    About?: ValidationFunction<string>;
    Location?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserProfileUpdateFormOverridesProps = {
    UserProfileUpdateFormGrid?: FormProps<GridProps>;
    Username?: FormProps<TextFieldProps>;
    Name?: FormProps<TextFieldProps>;
    Tagline?: FormProps<TextFieldProps>;
    Skills?: FormProps<TextFieldProps>;
    Interests?: FormProps<TextFieldProps>;
    About?: FormProps<TextFieldProps>;
    Location?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserProfileUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserProfileUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userProfile?: UserProfile;
    onSubmit?: (fields: UserProfileUpdateFormInputValues) => UserProfileUpdateFormInputValues;
    onSuccess?: (fields: UserProfileUpdateFormInputValues) => void;
    onError?: (fields: UserProfileUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: UserProfileUpdateFormInputValues) => UserProfileUpdateFormInputValues;
    onValidate?: UserProfileUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserProfileUpdateForm(props: UserProfileUpdateFormProps): React.ReactElement;
