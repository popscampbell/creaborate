/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Asset } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function AssetUpdateForm(props) {
  const {
    id: idProp,
    asset,
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
    searchName: "",
    description: "",
    searchDescription: "",
    notes: "",
    searchNotes: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [searchName, setSearchName] = React.useState(initialValues.searchName);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [searchDescription, setSearchDescription] = React.useState(
    initialValues.searchDescription
  );
  const [notes, setNotes] = React.useState(initialValues.notes);
  const [searchNotes, setSearchNotes] = React.useState(
    initialValues.searchNotes
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = assetRecord
      ? { ...initialValues, ...assetRecord }
      : initialValues;
    setName(cleanValues.name);
    setSearchName(cleanValues.searchName);
    setDescription(cleanValues.description);
    setSearchDescription(cleanValues.searchDescription);
    setNotes(cleanValues.notes);
    setSearchNotes(cleanValues.searchNotes);
    setErrors({});
  };
  const [assetRecord, setAssetRecord] = React.useState(asset);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Asset, idProp) : asset;
      setAssetRecord(record);
    };
    queryData();
  }, [idProp, asset]);
  React.useEffect(resetStateValues, [assetRecord]);
  const validations = {
    name: [{ type: "Required" }],
    searchName: [{ type: "Required" }],
    description: [],
    searchDescription: [],
    notes: [],
    searchNotes: [],
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
          searchName,
          description,
          searchDescription,
          notes,
          searchNotes,
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
            Asset.copyOf(assetRecord, (updated) => {
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
      {...getOverrideProps(overrides, "AssetUpdateForm")}
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
              searchName,
              description,
              searchDescription,
              notes,
              searchNotes,
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
        label="Search name"
        isRequired={true}
        isReadOnly={false}
        value={searchName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              searchName: value,
              description,
              searchDescription,
              notes,
              searchNotes,
            };
            const result = onChange(modelFields);
            value = result?.searchName ?? value;
          }
          if (errors.searchName?.hasError) {
            runValidationTasks("searchName", value);
          }
          setSearchName(value);
        }}
        onBlur={() => runValidationTasks("searchName", searchName)}
        errorMessage={errors.searchName?.errorMessage}
        hasError={errors.searchName?.hasError}
        {...getOverrideProps(overrides, "searchName")}
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
              searchName,
              description: value,
              searchDescription,
              notes,
              searchNotes,
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
              searchName,
              description,
              searchDescription: value,
              notes,
              searchNotes,
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
      <TextField
        label="Notes"
        isRequired={false}
        isReadOnly={false}
        value={notes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              searchName,
              description,
              searchDescription,
              notes: value,
              searchNotes,
            };
            const result = onChange(modelFields);
            value = result?.notes ?? value;
          }
          if (errors.notes?.hasError) {
            runValidationTasks("notes", value);
          }
          setNotes(value);
        }}
        onBlur={() => runValidationTasks("notes", notes)}
        errorMessage={errors.notes?.errorMessage}
        hasError={errors.notes?.hasError}
        {...getOverrideProps(overrides, "notes")}
      ></TextField>
      <TextField
        label="Search notes"
        isRequired={false}
        isReadOnly={false}
        value={searchNotes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              searchName,
              description,
              searchDescription,
              notes,
              searchNotes: value,
            };
            const result = onChange(modelFields);
            value = result?.searchNotes ?? value;
          }
          if (errors.searchNotes?.hasError) {
            runValidationTasks("searchNotes", value);
          }
          setSearchNotes(value);
        }}
        onBlur={() => runValidationTasks("searchNotes", searchNotes)}
        errorMessage={errors.searchNotes?.errorMessage}
        hasError={errors.searchNotes?.hasError}
        {...getOverrideProps(overrides, "searchNotes")}
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
          isDisabled={!(idProp || asset)}
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
              !(idProp || asset) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
