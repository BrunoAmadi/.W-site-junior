export default class createMenu {
  constructor(elementOpen, elementClose, bgMenuMobile, menuInterno) {
    this.elementOpen = elementOpen;
    this.elementClose = elementClose;
    this.bgMenuMobile = bgMenuMobile;
    this.menuInterno = menuInterno;
  }

  openM(typeEvent) {
    const btnMenu = document.querySelector(this.elementOpen);
    const menuMobile = document.querySelector(this.bgMenuMobile);
    btnMenu.addEventListener(typeEvent, (event) => {
      menuMobile.classList.toggle("ativo-bg");
      btnMenu.style.display = "none";
    });
  }

  closeModalMenu(typeEvent) {
    const btnMenu = document.querySelector(this.elementOpen);
    const btnClose = document.querySelector(this.elementClose);
    const menuMobile = document.querySelector(this.bgMenuMobile);
    btnClose.addEventListener(typeEvent, () => {
      menuMobile.classList.toggle("ativo-bg");
      btnMenu.style.display = "block";
    });
    menuMobile.addEventListener("click", (event) => {
      if (event.target === menuMobile) {
        menuMobile.classList.remove("ativo-bg");
        btnMenu.style.display = "block";
      }
    });
  }
}
