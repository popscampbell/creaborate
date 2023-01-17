/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { UserNotification } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function UserNotificationCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    username: "",
    message: "",
    level: undefined,
    displayedAt: "",
    heading: "",
  };
  const [username, setUsername] = React.useState(initialValues.username);
  const [message, setMessage] = React.useState(initialValues.message);
  const [level, setLevel] = React.useState(initialValues.level);
  const [displayedAt, setDisplayedAt] = React.useState(
    initialValues.displayedAt
  );
  const [heading, setHeading] = React.useState(initialValues.heading);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUsername(initialValues.username);
    setMessage(initialValues.message);
    setLevel(initialValues.level);
    setDisplayedAt(initialValues.displayedAt);
    setHeading(initialValues.heading);
    setErrors({});
  };
  const validations = {
    username: [{ type: "Required" }],
    message: [{ type: "Required" }],
    level: [{ type: "Required" }],
    displayedAt: [],
    heading: [],
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hour12: false,
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
          username,
          message,
          level,
          displayedAt,
          heading,
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
          await DataStore.save(new UserNotification(modelFields));
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
      {...getOverrideProps(overrides, "UserNotificationCreateForm")}
      {...rest}
    >
      <TextField
        label="Username"
        isRequired={true}
        isReadOnly={false}
        value={username}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username: value,
              message,
              level,
              displayedAt,
              heading,
            };
            const result = onChange(modelFields);
            value = result?.username ?? value;
          }
          if (errors.username?.hasError) {
            runValidationTasks("username", value);
          }
          setUsername(value);
        }}
        onBlur={() => runValidationTasks("username", username)}
        errorMessage={errors.username?.errorMessage}
        hasError={errors.username?.hasError}
        {...getOverrideProps(overrides, "username")}
      ></TextField>
      <TextField
        label="Message"
        isRequired={true}
        isReadOnly={false}
        value={message}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              message: value,
              level,
              displayedAt,
              heading,
            };
            const result = onChange(modelFields);
            value = result?.message ?? value;
          }
          if (errors.message?.hasError) {
            runValidationTasks("message", value);
          }
          setMessage(value);
        }}
        onBlur={() => runValidationTasks("message", message)}
        errorMessage={errors.message?.errorMessage}
        hasError={errors.message?.hasError}
        {...getOverrideProps(overrides, "message")}
      ></TextField>
      <SelectField
        label="Level"
        placeholder="Please select an option"
        isDisabled={false}
        value={level}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              message,
              level: value,
              displayedAt,
              heading,
            };
            const result = onChange(modelFields);
            value = result?.level ?? value;
          }
          if (errors.level?.hasError) {
            runValidationTasks("level", value);
          }
          setLevel(value);
        }}
        onBlur={() => runValidationTasks("level", level)}
        errorMessage={errors.level?.errorMessage}
        hasError={errors.level?.hasError}
        {...getOverrideProps(overrides, "level")}
      >
        <option
          children="Normal"
          value="NORMAL"
          {...getOverrideProps(overrides, "leveloption0")}
        ></option>
        <option
          children="Info"
          value="INFO"
          {...getOverrideProps(overrides, "leveloption1")}
        ></option>
        <option
          children="Success"
          value="SUCCESS"
          {...getOverrideProps(overrides, "leveloption2")}
        ></option>
        <option
          children="Warning"
          value="WARNING"
          {...getOverrideProps(overrides, "leveloption3")}
        ></option>
        <option
          children="Error"
          value="ERROR"
          {...getOverrideProps(overrides, "leveloption4")}
        ></option>
      </SelectField>
      <TextField
        label="Displayed at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={displayedAt && convertToLocal(new Date(displayedAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              username,
              message,
              level,
              displayedAt: value,
              heading,
            };
            const result = onChange(modelFields);
            value = result?.displayedAt ?? value;
          }
          if (errors.displayedAt?.hasError) {
            runValidationTasks("displayedAt", value);
          }
          setDisplayedAt(value);
        }}
        onBlur={() => runValidationTasks("displayedAt", displayedAt)}
        errorMessage={errors.displayedAt?.errorMessage}
        hasError={errors.displayedAt?.hasError}
        {...getOverrideProps(overrides, "displayedAt")}
      ></TextField>
      <TextField
        label="Heading"
        isRequired={false}
        isReadOnly={false}
        value={heading}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              message,
              level,
              displayedAt,
              heading: value,
            };
            const result = onChange(modelFields);
            value = result?.heading ?? value;
          }
          if (errors.heading?.hasError) {
            runValidationTasks("heading", value);
          }
          setHeading(value);
        }}
        onBlur={() => runValidationTasks("heading", heading)}
        errorMessage={errors.heading?.errorMessage}
        hasError={errors.heading?.hasError}
        {...getOverrideProps(overrides, "heading")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
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
