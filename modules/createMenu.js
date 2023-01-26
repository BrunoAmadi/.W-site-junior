export default class createMenu {
  constructor(elementOpen, elementClose, divMenuMobile, navMenu) {
    this.elementOpen = elementOpen;
    this.elementClose = elementClose;
    this.divMenuMobile = divMenuMobile;
  }

  openM(typeEvent) {
    const btnMenu = document.querySelector(this.elementOpen);
    const menuMobile = document.querySelector(this.divMenuMobile);
    btnMenu.addEventListener(typeEvent, (event) => {
      menuMobile.classList.toggle("ativo");
      btnMenu.style.display = "none";
    });
  }

  closeModalMenu(typeEvent) {
    const btnMenu = document.querySelector(this.elementOpen);
    const btnClose = document.querySelector(this.elementClose);
    const menuMobile = document.querySelector(this.divMenuMobile);
    btnClose.addEventListener(typeEvent, () => {
      menuMobile.classList.toggle("ativo");
      btnMenu.style.display = "block";
    });
  }
}
