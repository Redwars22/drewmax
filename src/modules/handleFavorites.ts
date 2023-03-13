import { toast } from "react-toastify";
import { IFavorite } from "../types/types";
import { useUserStore } from "../store/UserStore";

export function fetchFavorites(): IFavorite[] {
  return useUserStore.getState().favorites!;
}

export function handleAddToFavorites(movie: IFavorite) {
  let favs: IFavorite[] = fetchFavorites();

  if (favs?.[0])
    for (let i = 0; i < favs.length; i++) {
      if (favs[i].title === movie.title) {
        toast("O item já foi adicionado à sua lista de favoritos.");
        return;
      }
    }

  try {
    favs?.push(movie);
    useUserStore.setState((s) => ({
      ...s,
      favorites: favs,
    }));

    toast("O filme foi adicionado com sucesso à lista de favoritos!");
  } catch (err) {
    toast("Ops, não foi possível adicionar o filme à lista!");
  }
}

export function handleRemoveAllFavorites() {
  useUserStore.setState((s) => ({
    ...s,
    favorites: [],
  }));
}
