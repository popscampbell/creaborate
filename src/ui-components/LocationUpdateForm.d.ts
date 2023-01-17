/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Location } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LocationUpdateFormInputValues = {
    name?: string;
    searchName?: string;
};
export declare type LocationUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    searchName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LocationUpdateFormOverridesProps = {
    LocationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    searchName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LocationUpdateFormProps = React.PropsWithChildren<{
    overrides?: LocationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    location?: Location;
    onSubmit?: (fields: LocationUpdateFormInputValues) => LocationUpdateFormInputValues;
    onSuccess?: (fields: LocationUpdateFormInputValues) => void;
    onError?: (fields: LocationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LocationUpdateFormInputValues) => LocationUpdateFormInputValues;
    onValidate?: LocationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LocationUpdateForm(props: LocationUpdateFormProps): React.ReactElement;
