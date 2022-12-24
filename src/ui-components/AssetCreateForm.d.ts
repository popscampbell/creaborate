/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AssetCreateFormInputValues = {
    Name?: string;
    Description?: string;
};
export declare type AssetCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Description?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AssetCreateFormOverridesProps = {
    AssetCreateFormGrid?: FormProps<GridProps>;
    Name?: FormProps<TextFieldProps>;
    Description?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AssetCreateFormProps = React.PropsWithChildren<{
    overrides?: AssetCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AssetCreateFormInputValues) => AssetCreateFormInputValues;
    onSuccess?: (fields: AssetCreateFormInputValues) => void;
    onError?: (fields: AssetCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: AssetCreateFormInputValues) => AssetCreateFormInputValues;
    onValidate?: AssetCreateFormValidationValues;
} & React.CSSProperties>;
export default function AssetCreateForm(props: AssetCreateFormProps): React.ReactElement;
