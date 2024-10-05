const template = document.createElement("template");
template.innerHTML = `
  <style>
    label {
      color: green;
    }
  </style>
  <label>
    <input type="checkbox" />
    <slot></slot>
    <span class="description">
      <slot name="description"></slot>
    </span>
  </label>
`;

class TodoItem extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
    // this.title = shadow.querySelector("[data-title]");
    // this.title.innerText = this.innerText;
    this.checkbox = shadow.querySelector("input");
  }

  static get observedAttributes() {
    return ["checked"];
  }

  // You usually use callbacks for like doing something with your components.
  // This one checks if an observed attribute changed
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "checked") this.updateChecked(newValue);
    console.log(name, oldValue, newValue)
  }

  updateChecked(value) {
    this.checkbox.checked = value != null && value !== "false";
  }

  connectedCallback() {
    console.log("connected")
  }
  disconnectedCallback() {
    console.log("disconnected")
  }
}

customElements.define("todo-item", TodoItem);

const item = document.querySelector("todo-item");

let checked = true;
setInterval(() => {
  checked = !checked;
  item.setAttribute("checked", checked)
}, 5000)
//item.remove()
