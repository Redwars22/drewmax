import { toast } from "react-toastify";
import { IFavorite } from "../types/types";

export function fetchFavorites(): [] {
  if (localStorage.getItem("favorites")) {
    return JSON.parse(localStorage.getItem("favorites")!);
  }

  return [];
}

export function handleAddToFavorites(movie: IFavorite) {
  //se item já existir, remova-o

  let favs: IFavorite[] = fetchFavorites();

  if (favs.length > 0)
    for (let i = 0; i < favs.length; i++) {
      if (favs[i].title === movie.title) {
        toast("O item já foi adicionado à sua lista de favoritos.");
        return;
      }
    }

  try {
    favs?.push(movie);
  } catch (err) {
    toast("Ops, não foi possível adicionar o filme à lista!");
  }

  localStorage.setItem("favorites", JSON.stringify(favs));
  toast("O filme foi adicionado com sucesso à lista de favoritos!");
}

export function handleRemoveAllFavorites() {
  localStorage.removeItem("favorites");
}
