/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Expense } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function ExpenseUpdateForm(props) {
  const {
    id,
    expense,
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
    Description: undefined,
    Amount: undefined,
    IncurredDate: undefined,
    IsRecurring: false,
  };
  const [Name, setName] = React.useState(initialValues.Name);
  const [Description, setDescription] = React.useState(
    initialValues.Description
  );
  const [Amount, setAmount] = React.useState(initialValues.Amount);
  const [IncurredDate, setIncurredDate] = React.useState(
    initialValues.IncurredDate
  );
  const [IsRecurring, setIsRecurring] = React.useState(
    initialValues.IsRecurring
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...expenseRecord };
    setName(cleanValues.Name);
    setDescription(cleanValues.Description);
    setAmount(cleanValues.Amount);
    setIncurredDate(cleanValues.IncurredDate);
    setIsRecurring(cleanValues.IsRecurring);
    setErrors({});
  };
  const [expenseRecord, setExpenseRecord] = React.useState(expense);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Expense, id) : expense;
      setExpenseRecord(record);
    };
    queryData();
  }, [id, expense]);
  React.useEffect(resetStateValues, [expenseRecord]);
  const validations = {
    Name: [{ type: "Required" }],
    Description: [],
    Amount: [],
    IncurredDate: [],
    IsRecurring: [{ type: "Required" }],
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
          Description,
          Amount,
          IncurredDate,
          IsRecurring,
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
            Expense.copyOf(expenseRecord, (updated) => {
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
      {...getOverrideProps(overrides, "ExpenseUpdateForm")}
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
              Description,
              Amount,
              IncurredDate,
              IsRecurring,
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
        label="Description"
        isRequired={false}
        isReadOnly={false}
        defaultValue={Description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Description: value,
              Amount,
              IncurredDate,
              IsRecurring,
            };
            const result = onChange(modelFields);
            value = result?.Description ?? value;
          }
          if (errors.Description?.hasError) {
            runValidationTasks("Description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("Description", Description)}
        errorMessage={errors.Description?.errorMessage}
        hasError={errors.Description?.hasError}
        {...getOverrideProps(overrides, "Description")}
      ></TextField>
      <TextField
        label="Amount"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={Amount}
        onChange={(e) => {
          let value = Number(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              Amount: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              Name,
              Description,
              Amount: value,
              IncurredDate,
              IsRecurring,
            };
            const result = onChange(modelFields);
            value = result?.Amount ?? value;
          }
          if (errors.Amount?.hasError) {
            runValidationTasks("Amount", value);
          }
          setAmount(value);
        }}
        onBlur={() => runValidationTasks("Amount", Amount)}
        errorMessage={errors.Amount?.errorMessage}
        hasError={errors.Amount?.hasError}
        {...getOverrideProps(overrides, "Amount")}
      ></TextField>
      <TextField
        label="Incurred date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        defaultValue={IncurredDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Description,
              Amount,
              IncurredDate: value,
              IsRecurring,
            };
            const result = onChange(modelFields);
            value = result?.IncurredDate ?? value;
          }
          if (errors.IncurredDate?.hasError) {
            runValidationTasks("IncurredDate", value);
          }
          setIncurredDate(value);
        }}
        onBlur={() => runValidationTasks("IncurredDate", IncurredDate)}
        errorMessage={errors.IncurredDate?.errorMessage}
        hasError={errors.IncurredDate?.hasError}
        {...getOverrideProps(overrides, "IncurredDate")}
      ></TextField>
      <SwitchField
        label="Is recurring"
        defaultChecked={false}
        isDisabled={false}
        isChecked={IsRecurring}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Name,
              Description,
              Amount,
              IncurredDate,
              IsRecurring: value,
            };
            const result = onChange(modelFields);
            value = result?.IsRecurring ?? value;
          }
          if (errors.IsRecurring?.hasError) {
            runValidationTasks("IsRecurring", value);
          }
          setIsRecurring(value);
        }}
        onBlur={() => runValidationTasks("IsRecurring", IsRecurring)}
        errorMessage={errors.IsRecurring?.errorMessage}
        hasError={errors.IsRecurring?.hasError}
        {...getOverrideProps(overrides, "IsRecurring")}
      ></SwitchField>
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
