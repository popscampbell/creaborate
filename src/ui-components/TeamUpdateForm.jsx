/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Team } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function TeamUpdateForm(props) {
  const {
    id,
    team,
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
    TeamType: undefined,
    Visibility: undefined,
  };
  const [Name, setName] = React.useState(initialValues.Name);
  const [TeamType, setTeamType] = React.useState(initialValues.TeamType);
  const [Visibility, setVisibility] = React.useState(initialValues.Visibility);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...teamRecord };
    setName(cleanValues.Name);
    setTeamType(cleanValues.TeamType);
    setVisibility(cleanValues.Visibility);
    setErrors({});
  };
  const [teamRecord, setTeamRecord] = React.useState(team);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Team, id) : team;
      setTeamRecord(record);
    };
    queryData();
  }, [id, team]);
  React.useEffect(resetStateValues, [teamRecord]);
  const validations = {
    Name: [{ type: "Required" }],
    TeamType: [],
    Visibility: [],
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
          TeamType,
          Visibility,
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
            Team.copyOf(teamRecord, (updated) => {
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
      {...getOverrideProps(overrides, "TeamUpdateForm")}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        defaultValue={Name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name: value,
              TeamType,
              Visibility,
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
      <SelectField
        label="Team type"
        placeholder="Please select an option"
        isDisabled={false}
        value={TeamType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              TeamType: value,
              Visibility,
            };
            const result = onChange(modelFields);
            value = result?.TeamType ?? value;
          }
          if (errors.TeamType?.hasError) {
            runValidationTasks("TeamType", value);
          }
          setTeamType(value);
        }}
        onBlur={() => runValidationTasks("TeamType", TeamType)}
        errorMessage={errors.TeamType?.errorMessage}
        hasError={errors.TeamType?.hasError}
        {...getOverrideProps(overrides, "TeamType")}
      >
        <option
          children="Team"
          value="TEAM"
          {...getOverrideProps(overrides, "TeamTypeoption0")}
        ></option>
        <option
          children="Band"
          value="BAND"
          {...getOverrideProps(overrides, "TeamTypeoption1")}
        ></option>
        <option
          children="Group"
          value="GROUP"
          {...getOverrideProps(overrides, "TeamTypeoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Visibility"
        placeholder="Please select an option"
        isDisabled={false}
        value={Visibility}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              TeamType,
              Visibility: value,
            };
            const result = onChange(modelFields);
            value = result?.Visibility ?? value;
          }
          if (errors.Visibility?.hasError) {
            runValidationTasks("Visibility", value);
          }
          setVisibility(value);
        }}
        onBlur={() => runValidationTasks("Visibility", Visibility)}
        errorMessage={errors.Visibility?.errorMessage}
        hasError={errors.Visibility?.hasError}
        {...getOverrideProps(overrides, "Visibility")}
      >
        <option
          children="Private"
          value="PRIVATE"
          {...getOverrideProps(overrides, "Visibilityoption0")}
        ></option>
        <option
          children="Public"
          value="PUBLIC"
          {...getOverrideProps(overrides, "Visibilityoption1")}
        ></option>
        <option
          children="Archived"
          value="ARCHIVED"
          {...getOverrideProps(overrides, "Visibilityoption2")}
        ></option>
      </SelectField>
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
