import { useField } from "formik";
import { Input as Inputbox, Label, FormGroup } from "reactstrap";

const Input = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <FormGroup>
      <Label for={props.name}>{label}</Label>
      <Inputbox {...field} {...props} />
    </FormGroup>
  );
};

export default Input;
