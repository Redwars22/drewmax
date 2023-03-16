export default function DefaultError() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <i
        className="bi bi-bug-fill"
        style={{ color: "#4c4a4a", fontSize: 200 }}
      ></i>
      <h1 style={{ color: "grey" }}>Epa, ocorreu um erro!</h1>
      <h3 style={{ color: "grey", textAlign: "center" }}>
        Tente reiniciar seu dispositivo ou acessar a página novamente, pode ser
        que funcione.
        <br /> Qualquer coisa, fique à vontade para entrar em contato conosco!
      </h3>
    </div>
  );
}
