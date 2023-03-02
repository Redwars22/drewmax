import { IHeroButton } from "../../../types/types";

export default function HeroButtonComponent(props: IHeroButton) {
  return (
    <button onClick={props.action} className="default-button">
      <i className={`bi bi-${props.icon}`}></i>
      {props.title}
    </button>
  );
}
