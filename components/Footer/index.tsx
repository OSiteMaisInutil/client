import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import module from "./index.module.scss";
import { faGithub, faSquareGithub } from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <div className={module.footer}>

      <div>
        <FontAwesomeIcon icon={faGithub} />
      </div>
      <strong>o site mais inútil</strong>
    </div>
  );
}
