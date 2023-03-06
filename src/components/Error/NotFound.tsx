export default function NotFound() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <i
        className="bi bi-emoji-neutral"
        style={{ color: "red", fontSize: 200 }}
      ></i>
      <h2 style={{ color: "red" }}>
        Ops, nada encontrado! Tente procurar outro título ou verifique se você
        digitou corretamente.
      </h2>
    </div>
  );
}
