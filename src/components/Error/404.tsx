export default function Page404() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <i
        className="bi bi-exclamation-square"
        style={{ color: "#4c4a4a", fontSize: 200 }}
      ></i>
      <h1 style={{ color: "grey" }}>Ops, nada encontrado!</h1>
      <h3 style={{ color: "grey" }}>
        Volte para a página inicial e escolha um dentre os vários títulos
        disponíveis para assitir.
      </h3>
    </div>
  );
}
