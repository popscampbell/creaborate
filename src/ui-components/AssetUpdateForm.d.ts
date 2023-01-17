/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Asset } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AssetUpdateFormInputValues = {
    name?: string;
    searchName?: string;
    description?: string;
    searchDescription?: string;
    notes?: string;
    searchNotes?: string;
};
export declare type AssetUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    searchName?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    searchDescription?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
    searchNotes?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AssetUpdateFormOverridesProps = {
    AssetUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    searchName?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    searchDescription?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
    searchNotes?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AssetUpdateFormProps = React.PropsWithChildren<{
    overrides?: AssetUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    asset?: Asset;
    onSubmit?: (fields: AssetUpdateFormInputValues) => AssetUpdateFormInputValues;
    onSuccess?: (fields: AssetUpdateFormInputValues) => void;
    onError?: (fields: AssetUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AssetUpdateFormInputValues) => AssetUpdateFormInputValues;
    onValidate?: AssetUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AssetUpdateForm(props: AssetUpdateFormProps): React.ReactElement;
