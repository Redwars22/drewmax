export function handleShowPlayer() {
  document.querySelector("body")!.style.overflow = "hidden";
  (document.querySelector(".player") as HTMLDivElement)!.style.display = "flex";
  (document.querySelector(".player") as HTMLDivElement)!.style.flexDirection =
    "column";
  window.scrollTo(0, 0);
}

export function handleClosePlayer() {
  document.querySelector("body")!.style.overflow = "auto";
  (document.querySelector(".player") as HTMLDivElement)!.style.display = "none";
}
