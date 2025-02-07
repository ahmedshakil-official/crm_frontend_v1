import { FormGroup, Input, Label } from "reactstrap";

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
}

const FormField: React.FC<FormFieldProps> = ({
  name,
  label,
  type,
  options,
}) => {
  return (
    <FormGroup className="text-start grid g-3 col">
      <Label for={name}>{label}</Label>

      {/* Render Select Dropdown */}
      {type === "select" ? (
        <Input type="select" name={name} id={name}>
          <option value="">Select {label}</option>
          {options?.map((option, idx) => (
            <option key={idx} value={option}>
              {option}
            </option>
          ))}
        </Input>
      ) : type === "radio" ? (
        // Render Radio Buttons
        <div>
          {["Yes", "No"].map((option) => (
            <FormGroup check key={option}>
              <Label check>
                <Input type="radio" name={name} value={option} /> {option}
              </Label>
            </FormGroup>
          ))}
        </div>
      ) : (
        // Render Other Input Types (text, number, email, etc.)
        <Input
          type={type}
          name={name}
          id={name}
          placeholder={`Enter ${label}`}
        />
      )}
    </FormGroup>
  );
};

export default FormField;
