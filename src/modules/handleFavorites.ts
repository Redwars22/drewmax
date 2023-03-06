export function fetchFavorites(): [] | null {
  if (localStorage.getItem("favorites")) {
    return JSON.parse(localStorage.getItem("favorites")!);
  }

  return null;
}
