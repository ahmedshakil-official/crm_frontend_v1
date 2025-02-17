import { FormGroup, Input, Label, FormFeedback } from "reactstrap";

export type InputType =
  | "text"
  | "email"
  | "number"
  | "select"
  | "date"
  | "textarea"
  | "radio"
  | "checkbox"; // Added checkbox

export interface FormFieldProps {
  name: string;
  label: string;
  type: InputType;
  options?: string[];
  required?: boolean;
  values?: string[];
  // For checkboxes, value will be a string array.
  value: string | boolean | number | Date | string[] | null;
  onChange: (value: string | boolean | number | Date | string[] | null) => void;
  error?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  name,
  label,
  type,
  options,
  required,
  values,
  value,
  onChange,
  error,
}) => {
  return (
    <FormGroup className="text-start grid g-3 col">
      <Label for={name}>
        {label} {required && <span className="text-danger">*</span>}
      </Label>

      {type === "select" ? (
        <Input
          type="select"
          name={name}
          id={name}
          value={value as string}
          onChange={(e) => onChange(e.target.value)}
          invalid={!!error}
        >
          <option value="">~~Select {label}~~</option>
          {options?.map((option, idx) => (
            <option key={idx} value={values?.[idx]}>
              {option}
            </option>
          ))}
        </Input>
      ) : type === "checkbox" ? (
        <div>
          {options?.map((option, idx) => {
            const optionValue = values ? values[idx] : option;
            // Ensure that value is treated as a string array.
            const selectedValues = Array.isArray(value) ? value : [];
            return (
              <FormGroup check key={optionValue}>
                <Label check>
                  <Input
                  
                    type="checkbox"
                    name={name}
                    value={optionValue}
                    checked={selectedValues.includes(optionValue)}
                    onChange={(e) => {
                      let newValues = [...selectedValues];
                      if (e.target.checked) {
                        newValues.push(optionValue);
                      } else {
                        newValues = newValues.filter(
                          (val) => val !== optionValue
                        );
                      }
                      onChange(newValues);
                    }}
                    invalid={!!error}
                  />{" "}
                  {option}
                </Label>
              </FormGroup>
            );
          })}
        </div>
      ) : type === "radio" ? (
        <div>
          {["Yes", "No"].map((option) => (
            <FormGroup check key={option}>
              <Label check>
                <Input
                  type="radio"
                  name={name}
                  value={option === "Yes" ? "true" : "false"}
                  checked={value === (option === "Yes")}
                  onChange={() => onChange(option === "Yes")}
                />{" "}
                {option}
              </Label>
            </FormGroup>
          ))}
        </div>
      ) : (
        <Input
          type={type}
          name={name}
          id={name}
          value={type === "date" && !value ? "" : (value as string)}
          required={required}
          placeholder={`Enter ${label}`}
          onChange={(e) =>
            onChange(
              type === "date" && e.target.value === "" ? null : e.target.value
            )
          }
          invalid={!!error}
        />
      )}
      {error && <FormFeedback>{error}</FormFeedback>}
    </FormGroup>
  );
};

export default FormField;
