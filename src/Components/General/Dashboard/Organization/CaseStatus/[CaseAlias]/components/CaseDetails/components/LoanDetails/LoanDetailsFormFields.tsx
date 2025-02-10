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
  value: string,
  onChange: (value: string) => void;
  error?: string; // Added error prop
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
          value={values}
          onChange={(e) => onChange(e.target.value)}
          invalid={!!error} // Apply Bootstrap error styling
        >
          <option value="">~~Select {label}~~</option>
          {options?.map((option, idx) => (
            <option key={idx} value={values?.[idx] || option}>
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
                  value={option}
                  checked={value === option}
                  onChange={(e) => onChange(e.target.value)}
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
          invalid={!!error} // Apply Bootstrap error styling
        />
      )}
      {error && <FormFeedback>{error}</FormFeedback>}{" "}
      {/* Show validation message */}
    </FormGroup>
  );
};

export default FormField;
