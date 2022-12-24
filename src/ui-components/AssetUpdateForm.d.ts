/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Asset } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AssetUpdateFormInputValues = {
    Name?: string;
    Description?: string;
};
export declare type AssetUpdateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Description?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AssetUpdateFormOverridesProps = {
    AssetUpdateFormGrid?: FormProps<GridProps>;
    Name?: FormProps<TextFieldProps>;
    Description?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AssetUpdateFormProps = React.PropsWithChildren<{
    overrides?: AssetUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    asset?: Asset;
    onSubmit?: (fields: AssetUpdateFormInputValues) => AssetUpdateFormInputValues;
    onSuccess?: (fields: AssetUpdateFormInputValues) => void;
    onError?: (fields: AssetUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: AssetUpdateFormInputValues) => AssetUpdateFormInputValues;
    onValidate?: AssetUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AssetUpdateForm(props: AssetUpdateFormProps): React.ReactElement;
