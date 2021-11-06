import { useField } from "formik";
import { Input, Label, FormGroup } from "reactstrap";

const Select = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <FormGroup>
      <Label for={props.name}>{label}</Label>
      <Input {...field} {...props} type="select" />
    </FormGroup>
  );
};

export default Select;
