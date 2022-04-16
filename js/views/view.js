export default class View {
  root = document.querySelector(".section-products");

  render(html) {
    this.clear();
    this.root.insertAdjacentHTML("afterbegin", html);
  }

  clear() {
    this.root.innerHTML = "";
  }
}
