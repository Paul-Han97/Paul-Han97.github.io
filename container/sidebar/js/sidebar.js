const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

let view = params.view;

if (view == undefined) {
  console.log("test");
}

if (view === "home") {
  const home = document.querySelector("#home");
  home.classList.add("material-symbol-selected");
}

if (view === "board") {
  const board = document.querySelector("#board");
  board.classList.add("material-symbol-selected");
}

if (view === "category") {
  const category = document.querySelector("#category");
  category.classList.add("material-symbol-selected");
}

if (view === "tag") {
  const tag = document.querySelector("#tag");
  tag.classList.add("material-symbol-selected");
}
