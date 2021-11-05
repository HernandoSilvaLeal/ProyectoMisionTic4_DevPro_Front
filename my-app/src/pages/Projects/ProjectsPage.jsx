import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import TableProjects from "../../components/TableProjects/TableProjects";
import "./ProjectsPage.css";

const ProjectsPage = () => {
  return (
    <div>
      <h1>ProjectsPage</h1>
      <Link to="/projects/create" className="linkButton">
        <FaPlus />
      </Link>

      <TableProjects />
    </div>
  );
};

export default ProjectsPage;
