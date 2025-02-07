import { FormGroup, Input, Label } from "reactstrap";

// In FormField.tsx or wherever you define the FormFieldProps interface
export type InputType =
  | "text"
  | "email"
  | "number"
  | "select"
  | "date"
  | "textarea"
  | "radio";

export interface FormFieldProps {
  name: string ;
  label: string;
  type: InputType;
  options?: string[];
  required?:boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  name,
  label,
  type,
  options,
  required
}) => {
  return (
    <FormGroup className=" text-start grid g-3 col">
      <Label for={name}>{label}</Label>
      {type === "select" ? (
        <Input type="select" name={name} id={name}>
          <option value="">Select {label}</option>
          {options?.map((option, idx) => (
            <option key={idx} value={option}>
              {option}
            </option>
          ))}
        </Input>
      ) : (
        <Input
          type={type}
          name={name}
          id={name}
          required={required}
          placeholder={`Enter ${label}`}
        />
      )}
    </FormGroup>
  );
};

export default FormField;
