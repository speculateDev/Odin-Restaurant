export default class View {
  _parentElement = document.querySelector('#content');
  _spinner = `<div class="fx-center fx-height"><div class="spinner"><div></div><div></div><div></div><div></div></div> </div>`;

  render() {
    this._renderSpinner();

    const markup = this.generateMarkup();
    setTimeout(() => {
      this._clear();
      this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }, 800);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  _renderSpinner() {
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', this._spinner);
  }
}
