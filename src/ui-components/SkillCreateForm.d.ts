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
export declare type SkillCreateFormInputValues = {
    name?: string;
    searchName?: string;
};
export declare type SkillCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    searchName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SkillCreateFormOverridesProps = {
    SkillCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    searchName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SkillCreateFormProps = React.PropsWithChildren<{
    overrides?: SkillCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SkillCreateFormInputValues) => SkillCreateFormInputValues;
    onSuccess?: (fields: SkillCreateFormInputValues) => void;
    onError?: (fields: SkillCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SkillCreateFormInputValues) => SkillCreateFormInputValues;
    onValidate?: SkillCreateFormValidationValues;
} & React.CSSProperties>;
export default function SkillCreateForm(props: SkillCreateFormProps): React.ReactElement;
