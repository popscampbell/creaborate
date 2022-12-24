/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Image } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function ImageUpdateForm(props) {
  const {
    id,
    image,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    File: undefined,
    Caption: undefined,
    Detail: undefined,
  };
  const [File, setFile] = React.useState(initialValues.File);
  const [Caption, setCaption] = React.useState(initialValues.Caption);
  const [Detail, setDetail] = React.useState(initialValues.Detail);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...imageRecord };
    setFile(cleanValues.File);
    setCaption(cleanValues.Caption);
    setDetail(cleanValues.Detail);
    setErrors({});
  };
  const [imageRecord, setImageRecord] = React.useState(image);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Image, id) : image;
      setImageRecord(record);
    };
    queryData();
  }, [id, image]);
  React.useEffect(resetStateValues, [imageRecord]);
  const validations = {
    File: [{ type: "Required" }],
    Caption: [],
    Detail: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          File,
          Caption,
          Detail,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(
            Image.copyOf(imageRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "ImageUpdateForm")}
    >
      <TextField
        label="File"
        isRequired={true}
        isReadOnly={false}
        defaultValue={File}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              File: value,
              Caption,
              Detail,
            };
            const result = onChange(modelFields);
            value = result?.File ?? value;
          }
          if (errors.File?.hasError) {
            runValidationTasks("File", value);
          }
          setFile(value);
        }}
        onBlur={() => runValidationTasks("File", File)}
        errorMessage={errors.File?.errorMessage}
        hasError={errors.File?.hasError}
        {...getOverrideProps(overrides, "File")}
      ></TextField>
      <TextField
        label="Caption"
        isRequired={false}
        isReadOnly={false}
        defaultValue={Caption}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              File,
              Caption: value,
              Detail,
            };
            const result = onChange(modelFields);
            value = result?.Caption ?? value;
          }
          if (errors.Caption?.hasError) {
            runValidationTasks("Caption", value);
          }
          setCaption(value);
        }}
        onBlur={() => runValidationTasks("Caption", Caption)}
        errorMessage={errors.Caption?.errorMessage}
        hasError={errors.Caption?.hasError}
        {...getOverrideProps(overrides, "Caption")}
      ></TextField>
      <TextField
        label="Detail"
        isRequired={false}
        isReadOnly={false}
        defaultValue={Detail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              File,
              Caption,
              Detail: value,
            };
            const result = onChange(modelFields);
            value = result?.Detail ?? value;
          }
          if (errors.Detail?.hasError) {
            runValidationTasks("Detail", value);
          }
          setDetail(value);
        }}
        onBlur={() => runValidationTasks("Detail", Detail)}
        errorMessage={errors.Detail?.errorMessage}
        hasError={errors.Detail?.hasError}
        {...getOverrideProps(overrides, "Detail")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
