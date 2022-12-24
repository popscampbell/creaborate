/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Location } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LocationUpdateFormInputValues = {
    Name?: string;
    Address?: string;
    Website?: string;
    Phone?: string;
    ContactEmail?: string;
    ContactName?: string;
};
export declare type LocationUpdateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Address?: ValidationFunction<string>;
    Website?: ValidationFunction<string>;
    Phone?: ValidationFunction<string>;
    ContactEmail?: ValidationFunction<string>;
    ContactName?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LocationUpdateFormOverridesProps = {
    LocationUpdateFormGrid?: FormProps<GridProps>;
    Name?: FormProps<TextFieldProps>;
    Address?: FormProps<TextFieldProps>;
    Website?: FormProps<TextFieldProps>;
    Phone?: FormProps<TextFieldProps>;
    ContactEmail?: FormProps<TextFieldProps>;
    ContactName?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LocationUpdateFormProps = React.PropsWithChildren<{
    overrides?: LocationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    location?: Location;
    onSubmit?: (fields: LocationUpdateFormInputValues) => LocationUpdateFormInputValues;
    onSuccess?: (fields: LocationUpdateFormInputValues) => void;
    onError?: (fields: LocationUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: LocationUpdateFormInputValues) => LocationUpdateFormInputValues;
    onValidate?: LocationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LocationUpdateForm(props: LocationUpdateFormProps): React.ReactElement;
