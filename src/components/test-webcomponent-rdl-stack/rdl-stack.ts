import { LitElement, css, html } from "lit";
import {customElement} from 'lit/decorators.js';

@customElement('rdl-stack')
class RdlStack extends LitElement {
  static styles =
    css`
      :host {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      :host([direction=horizontal]) {
        flex-direction: row;
      }
      :host([gap=s]) {
        gap: 0.5rem;
      }
      :host([gap=l]) {
        gap: 2rem;
      }

      ::slotted(*) {
        background-color: #ff9933;
        flex: 1;
        padding: 1rem;
      }
    `;
  render() {
    return html`
    <slot></slot>
    `;
  }
}
