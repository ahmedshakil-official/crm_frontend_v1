import { FormGroup, Input, Label, FormFeedback } from "reactstrap";

export type InputType =
  | "text"
  | "email"
  | "number"
  | "select"
  | "date"
  | "textarea"
  | "radio";

export interface FormFieldProps {
  name: string;
  label: string;
  type: InputType;
  options?: string[];
  required?: boolean;
  values?: string[];
  value: string | boolean; // Allow both string and boolean
  onChange: (value: string | boolean) => void; // onChange will handle both
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
          value={value}
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
          value={value}
          required={required}
          placeholder={`Enter ${label}`}
          onChange={(e) => onChange(e.target.value)}
          invalid={!!error}
        />
      )}
      {error && <FormFeedback>{error}</FormFeedback>}
    </FormGroup>
  );
};

export default FormField;
