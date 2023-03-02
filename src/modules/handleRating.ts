import { toast } from "react-toastify";
import { Rating } from "../types/types";

export function handleRating(rating: Rating) {
  if (rating === "like" || rating === "dislike") {
    toast(
      "Agradecemos o seu feedback. Nós o usaremos para recomendar mais séries e filmes relevantes para você."
    );
    return;
  }

  toast("Erro ao salvar a sua classificação. Por favor tente novamente!");
}
