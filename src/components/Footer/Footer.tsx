import { Link } from "react-router-dom";
import { IFooter } from "../../types/footer";

export default function FooterComponent(props: IFooter) {
  return (
    <footer
      style={{
        backgroundColor: props.backgroundColor,
        color: props.foregroundColor,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        position: "absolute",
        width: "100%",
        bottom: -1,
        gap: "1rem",
        height: "50px",
      }}
    >
      <h1 title={props.description}>{props.appName}</h1>
      {props.links &&
        props.links.length > 0 &&
        props.links?.map((link) => (
          <Link
            to={link.link}
            style={{ color: link.linkColor, textDecorations: "none" }}
          >
            {link.text}
          </Link>
        ))}
      <span>© 2023. {props.appName}. Todos os direitos reservados.</span>
    </footer>
  );
}
