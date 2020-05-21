import "./club-item.js";

class ClubList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({
      mode: "open"
    });
  }

  set clubs(clubs) {
    this._clubs = clubs;
    this.render();
  }

  render() {
    this._clubs.forEach((club) => {
      const clubItemElement = document.createElement("club-item");
      clubItemElement.club = club;
      this.shadowDOM.appendChild(clubItemElement);
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML = "";
    this.shadowDOM.innerHTML += `
    <style>
    .placeholder {
      font-weight: lighter;
      color: rgba(0, 0, 0, 0.5); 
      -webkit-user-select: none; 
      -moz-user-select: none; 
      -ms-user-select: none;
      user-select: none;
    }
    </stye>
    <h2 class="placeholder">${message}</h2>
    `;
  }
}

customElements.define("club-list", ClubList);