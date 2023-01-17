/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LocationCreateFormInputValues = {
    name?: string;
    searchName?: string;
};
export declare type LocationCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    searchName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LocationCreateFormOverridesProps = {
    LocationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    searchName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LocationCreateFormProps = React.PropsWithChildren<{
    overrides?: LocationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LocationCreateFormInputValues) => LocationCreateFormInputValues;
    onSuccess?: (fields: LocationCreateFormInputValues) => void;
    onError?: (fields: LocationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LocationCreateFormInputValues) => LocationCreateFormInputValues;
    onValidate?: LocationCreateFormValidationValues;
} & React.CSSProperties>;
export default function LocationCreateForm(props: LocationCreateFormProps): React.ReactElement;
