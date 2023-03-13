import { IHeroButton } from "../../../types/types";
import styles from "../../../styles/elements.module.scss";

export default function HeroButtonComponent(props: IHeroButton) {
  return (
    <button
      onClick={props.action}
      className={styles["default-button"]}
      title={props.hint}
    >
      <i className={`bi bi-${props.icon}`}></i>
      {props.title}
    </button>
  );
}
