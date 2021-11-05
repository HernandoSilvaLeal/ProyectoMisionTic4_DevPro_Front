import { Input, Label, FormGroup } from "reactstrap";

const Select = ({ children, label, ...props }) => {
  console.log({ ...props });
  return (
    <FormGroup>
      <Label for={props.name}>{label}</Label>
      <Input {...props} type="select">
        {children}
      </Input>
    </FormGroup>
  );
};

export default Select;
