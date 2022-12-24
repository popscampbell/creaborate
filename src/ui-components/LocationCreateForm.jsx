/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Location } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function LocationCreateForm(props) {
  const {
    clearOnSuccess = true,
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
    Name: undefined,
    Address: undefined,
    Website: undefined,
    Phone: undefined,
    ContactEmail: undefined,
    ContactName: undefined,
  };
  const [Name, setName] = React.useState(initialValues.Name);
  const [Address, setAddress] = React.useState(initialValues.Address);
  const [Website, setWebsite] = React.useState(initialValues.Website);
  const [Phone, setPhone] = React.useState(initialValues.Phone);
  const [ContactEmail, setContactEmail] = React.useState(
    initialValues.ContactEmail
  );
  const [ContactName, setContactName] = React.useState(
    initialValues.ContactName
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.Name);
    setAddress(initialValues.Address);
    setWebsite(initialValues.Website);
    setPhone(initialValues.Phone);
    setContactEmail(initialValues.ContactEmail);
    setContactName(initialValues.ContactName);
    setErrors({});
  };
  const validations = {
    Name: [{ type: "Required" }],
    Address: [],
    Website: [{ type: "URL" }],
    Phone: [{ type: "Phone" }],
    ContactEmail: [{ type: "Email" }],
    ContactName: [],
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
          Name,
          Address,
          Website: Website || undefined,
          Phone,
          ContactEmail,
          ContactName,
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
          await DataStore.save(new Location(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "LocationCreateForm")}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name: value,
              Address,
              Website,
              Phone,
              ContactEmail,
              ContactName,
            };
            const result = onChange(modelFields);
            value = result?.Name ?? value;
          }
          if (errors.Name?.hasError) {
            runValidationTasks("Name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("Name", Name)}
        errorMessage={errors.Name?.errorMessage}
        hasError={errors.Name?.hasError}
        {...getOverrideProps(overrides, "Name")}
      ></TextField>
      <TextField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address: value,
              Website,
              Phone,
              ContactEmail,
              ContactName,
            };
            const result = onChange(modelFields);
            value = result?.Address ?? value;
          }
          if (errors.Address?.hasError) {
            runValidationTasks("Address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("Address", Address)}
        errorMessage={errors.Address?.errorMessage}
        hasError={errors.Address?.hasError}
        {...getOverrideProps(overrides, "Address")}
      ></TextField>
      <TextField
        label="Website"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              Website: value,
              Phone,
              ContactEmail,
              ContactName,
            };
            const result = onChange(modelFields);
            value = result?.Website ?? value;
          }
          if (errors.Website?.hasError) {
            runValidationTasks("Website", value);
          }
          setWebsite(value);
        }}
        onBlur={() => runValidationTasks("Website", Website)}
        errorMessage={errors.Website?.errorMessage}
        hasError={errors.Website?.hasError}
        {...getOverrideProps(overrides, "Website")}
      ></TextField>
      <TextField
        label="Phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              Website,
              Phone: value,
              ContactEmail,
              ContactName,
            };
            const result = onChange(modelFields);
            value = result?.Phone ?? value;
          }
          if (errors.Phone?.hasError) {
            runValidationTasks("Phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("Phone", Phone)}
        errorMessage={errors.Phone?.errorMessage}
        hasError={errors.Phone?.hasError}
        {...getOverrideProps(overrides, "Phone")}
      ></TextField>
      <TextField
        label="Contact email"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              Website,
              Phone,
              ContactEmail: value,
              ContactName,
            };
            const result = onChange(modelFields);
            value = result?.ContactEmail ?? value;
          }
          if (errors.ContactEmail?.hasError) {
            runValidationTasks("ContactEmail", value);
          }
          setContactEmail(value);
        }}
        onBlur={() => runValidationTasks("ContactEmail", ContactEmail)}
        errorMessage={errors.ContactEmail?.errorMessage}
        hasError={errors.ContactEmail?.hasError}
        {...getOverrideProps(overrides, "ContactEmail")}
      ></TextField>
      <TextField
        label="Contact name"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              Website,
              Phone,
              ContactEmail,
              ContactName: value,
            };
            const result = onChange(modelFields);
            value = result?.ContactName ?? value;
          }
          if (errors.ContactName?.hasError) {
            runValidationTasks("ContactName", value);
          }
          setContactName(value);
        }}
        onBlur={() => runValidationTasks("ContactName", ContactName)}
        errorMessage={errors.ContactName?.errorMessage}
        hasError={errors.ContactName?.hasError}
        {...getOverrideProps(overrides, "ContactName")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
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
