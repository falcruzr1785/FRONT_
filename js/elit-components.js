import {LitElement, html, css} from '../node_modules/lit-element/lit-element'
import lit from '../node_modules/lit-element/lit-element'

export class ElitComponents extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html`<p>I am green!</p>`;
  }
}

customElements.define('elit-components', ElitComponents);