import { FormGroup, Input, Label } from "reactstrap";

// In FormField.tsx or wherever you define the FormFieldProps interface
export type InputType = "text" | "email" | "number" | "select" | "date" ;

interface FormFieldProps {
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
    <FormGroup className=" text-start">
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
          type={type as InputType}
          name={name}
          id={name}
          placeholder={`Enter ${label}`}
        />
      )}
    </FormGroup>
  );
};

export default FormField;
