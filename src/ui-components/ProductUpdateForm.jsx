/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Product } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ProductUpdateForm(props) {
  const {
    id: idProp,
    product,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    searchString: "",
    description: "",
    searchDescription: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [searchString, setSearchString] = React.useState(
    initialValues.searchString
  );
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [searchDescription, setSearchDescription] = React.useState(
    initialValues.searchDescription
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = productRecord
      ? { ...initialValues, ...productRecord }
      : initialValues;
    setName(cleanValues.name);
    setSearchString(cleanValues.searchString);
    setDescription(cleanValues.description);
    setSearchDescription(cleanValues.searchDescription);
    setErrors({});
  };
  const [productRecord, setProductRecord] = React.useState(product);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Product, idProp) : product;
      setProductRecord(record);
    };
    queryData();
  }, [idProp, product]);
  React.useEffect(resetStateValues, [productRecord]);
  const validations = {
    name: [{ type: "Required" }],
    searchString: [{ type: "Required" }],
    description: [],
    searchDescription: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
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
          name,
          searchString,
          description,
          searchDescription,
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
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Product.copyOf(productRecord, (updated) => {
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
      {...getOverrideProps(overrides, "ProductUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              searchString,
              description,
              searchDescription,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Search string"
        isRequired={true}
        isReadOnly={false}
        value={searchString}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              searchString: value,
              description,
              searchDescription,
            };
            const result = onChange(modelFields);
            value = result?.searchString ?? value;
          }
          if (errors.searchString?.hasError) {
            runValidationTasks("searchString", value);
          }
          setSearchString(value);
        }}
        onBlur={() => runValidationTasks("searchString", searchString)}
        errorMessage={errors.searchString?.errorMessage}
        hasError={errors.searchString?.hasError}
        {...getOverrideProps(overrides, "searchString")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              searchString,
              description: value,
              searchDescription,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Search description"
        isRequired={false}
        isReadOnly={false}
        value={searchDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              searchString,
              description,
              searchDescription: value,
            };
            const result = onChange(modelFields);
            value = result?.searchDescription ?? value;
          }
          if (errors.searchDescription?.hasError) {
            runValidationTasks("searchDescription", value);
          }
          setSearchDescription(value);
        }}
        onBlur={() =>
          runValidationTasks("searchDescription", searchDescription)
        }
        errorMessage={errors.searchDescription?.errorMessage}
        hasError={errors.searchDescription?.hasError}
        {...getOverrideProps(overrides, "searchDescription")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || product)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || product) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
