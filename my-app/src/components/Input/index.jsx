import { Input as Inputbox, Label, FormGroup } from "reactstrap";

const Input = ({ label, ...props }) => {
  console.log({ ...props });
  return (
    <FormGroup>
      <Label for={props.name}>{label}</Label>
      <Inputbox {...props} />
    </FormGroup>
  );
};

export default Input;
