export default function Page404() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <i
        className="bi bi-exclamation-square"
        style={{ color: "red", fontSize: 200 }}
      ></i>
      <h1 style={{ color: "red" }}>Ops, nada encontrado!</h1>
      <h3 style={{ color: "red" }}>
        Volte para a página inicial e escolha um dentre os vários títulos
        disponíveis para assitir.
      </h3>
    </div>
  );
}
