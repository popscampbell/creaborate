/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { UserProfile } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
}) {
  const { tokens } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      (currentFieldValue !== undefined ||
        currentFieldValue !== null ||
        currentFieldValue !== "") &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  return (
    <React.Fragment>
      {isEditing && children}
      {!isEditing ? (
        <>
          <Text>{label}</Text>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            color={tokens.colors.brand.primary[80]}
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
}
export default function UserProfileUpdateForm(props) {
  const {
    id,
    userProfile,
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
    Username: undefined,
    Name: undefined,
    Tagline: undefined,
    Skills: [],
    Interests: [],
    About: undefined,
    Location: undefined,
  };
  const [Username, setUsername] = React.useState(initialValues.Username);
  const [Name, setName] = React.useState(initialValues.Name);
  const [Tagline, setTagline] = React.useState(initialValues.Tagline);
  const [Skills, setSkills] = React.useState(initialValues.Skills);
  const [Interests, setInterests] = React.useState(initialValues.Interests);
  const [About, setAbout] = React.useState(initialValues.About);
  const [Location, setLocation] = React.useState(initialValues.Location);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...userProfileRecord };
    setUsername(cleanValues.Username);
    setName(cleanValues.Name);
    setTagline(cleanValues.Tagline);
    setSkills(cleanValues.Skills ?? []);
    setCurrentSkillsValue(undefined);
    setInterests(cleanValues.Interests ?? []);
    setCurrentInterestsValue(undefined);
    setAbout(cleanValues.About);
    setLocation(cleanValues.Location);
    setErrors({});
  };
  const [userProfileRecord, setUserProfileRecord] = React.useState(userProfile);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(UserProfile, id) : userProfile;
      setUserProfileRecord(record);
    };
    queryData();
  }, [id, userProfile]);
  React.useEffect(resetStateValues, [userProfileRecord]);
  const [currentSkillsValue, setCurrentSkillsValue] = React.useState(undefined);
  const SkillsRef = React.createRef();
  const [currentInterestsValue, setCurrentInterestsValue] =
    React.useState(undefined);
  const InterestsRef = React.createRef();
  const validations = {
    Username: [{ type: "Required" }],
    Name: [{ type: "Required" }],
    Tagline: [],
    Skills: [],
    Interests: [],
    About: [],
    Location: [],
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
          Username,
          Name,
          Tagline,
          Skills,
          Interests,
          About,
          Location,
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
            UserProfile.copyOf(userProfileRecord, (updated) => {
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
      {...getOverrideProps(overrides, "UserProfileUpdateForm")}
    >
      <TextField
        label="Username"
        isRequired={true}
        isReadOnly={false}
        defaultValue={Username}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Username: value,
              Name,
              Tagline,
              Skills,
              Interests,
              About,
              Location,
            };
            const result = onChange(modelFields);
            value = result?.Username ?? value;
          }
          if (errors.Username?.hasError) {
            runValidationTasks("Username", value);
          }
          setUsername(value);
        }}
        onBlur={() => runValidationTasks("Username", Username)}
        errorMessage={errors.Username?.errorMessage}
        hasError={errors.Username?.hasError}
        {...getOverrideProps(overrides, "Username")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        defaultValue={Name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Username,
              Name: value,
              Tagline,
              Skills,
              Interests,
              About,
              Location,
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
        label="Tagline"
        isRequired={false}
        isReadOnly={false}
        defaultValue={Tagline}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Username,
              Name,
              Tagline: value,
              Skills,
              Interests,
              About,
              Location,
            };
            const result = onChange(modelFields);
            value = result?.Tagline ?? value;
          }
          if (errors.Tagline?.hasError) {
            runValidationTasks("Tagline", value);
          }
          setTagline(value);
        }}
        onBlur={() => runValidationTasks("Tagline", Tagline)}
        errorMessage={errors.Tagline?.errorMessage}
        hasError={errors.Tagline?.hasError}
        {...getOverrideProps(overrides, "Tagline")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              Username,
              Name,
              Tagline,
              Skills: values,
              Interests,
              About,
              Location,
            };
            const result = onChange(modelFields);
            values = result?.Skills ?? values;
          }
          setSkills(values);
          setCurrentSkillsValue(undefined);
        }}
        currentFieldValue={currentSkillsValue}
        label={"Skills"}
        items={Skills}
        hasError={errors.Skills?.hasError}
        setFieldValue={setCurrentSkillsValue}
        inputFieldRef={SkillsRef}
        defaultFieldValue={undefined}
      >
        <TextField
          label="Skills"
          isRequired={false}
          isReadOnly={false}
          value={currentSkillsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Skills?.hasError) {
              runValidationTasks("Skills", value);
            }
            setCurrentSkillsValue(value);
          }}
          onBlur={() => runValidationTasks("Skills", currentSkillsValue)}
          errorMessage={errors.Skills?.errorMessage}
          hasError={errors.Skills?.hasError}
          ref={SkillsRef}
          {...getOverrideProps(overrides, "Skills")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              Username,
              Name,
              Tagline,
              Skills,
              Interests: values,
              About,
              Location,
            };
            const result = onChange(modelFields);
            values = result?.Interests ?? values;
          }
          setInterests(values);
          setCurrentInterestsValue(undefined);
        }}
        currentFieldValue={currentInterestsValue}
        label={"Interests"}
        items={Interests}
        hasError={errors.Interests?.hasError}
        setFieldValue={setCurrentInterestsValue}
        inputFieldRef={InterestsRef}
        defaultFieldValue={undefined}
      >
        <TextField
          label="Interests"
          isRequired={false}
          isReadOnly={false}
          value={currentInterestsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Interests?.hasError) {
              runValidationTasks("Interests", value);
            }
            setCurrentInterestsValue(value);
          }}
          onBlur={() => runValidationTasks("Interests", currentInterestsValue)}
          errorMessage={errors.Interests?.errorMessage}
          hasError={errors.Interests?.hasError}
          ref={InterestsRef}
          {...getOverrideProps(overrides, "Interests")}
        ></TextField>
      </ArrayField>
      <TextField
        label="About"
        isRequired={false}
        isReadOnly={false}
        defaultValue={About}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Username,
              Name,
              Tagline,
              Skills,
              Interests,
              About: value,
              Location,
            };
            const result = onChange(modelFields);
            value = result?.About ?? value;
          }
          if (errors.About?.hasError) {
            runValidationTasks("About", value);
          }
          setAbout(value);
        }}
        onBlur={() => runValidationTasks("About", About)}
        errorMessage={errors.About?.errorMessage}
        hasError={errors.About?.hasError}
        {...getOverrideProps(overrides, "About")}
      ></TextField>
      <TextField
        label="Location"
        isRequired={false}
        isReadOnly={false}
        defaultValue={Location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Username,
              Name,
              Tagline,
              Skills,
              Interests,
              About,
              Location: value,
            };
            const result = onChange(modelFields);
            value = result?.Location ?? value;
          }
          if (errors.Location?.hasError) {
            runValidationTasks("Location", value);
          }
          setLocation(value);
        }}
        onBlur={() => runValidationTasks("Location", Location)}
        errorMessage={errors.Location?.errorMessage}
        hasError={errors.Location?.hasError}
        {...getOverrideProps(overrides, "Location")}
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
