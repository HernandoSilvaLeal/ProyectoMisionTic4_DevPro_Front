import { useParams } from "react-router-dom";

const Project = () => {
  const { id } = useParams();
  return <>Proyecto {id}</>;
};

export default Project;
