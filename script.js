import createMenu from "./modules/createMenu.js";

const criarMenu = new createMenu(
  "#menu img",
  "#xMenu img",
  "#modalContainer",
  ".nav"
);

const clickOpenMenu = criarMenu.openM("click");

const clickCloseMenu = criarMenu.closeModalMenu("click");
