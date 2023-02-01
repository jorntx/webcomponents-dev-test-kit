import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('stjr-input')

export class StjrInput extends LitElement {
	static styles = 
		css`
			:host {
				display: block;
				width: 100%;
			}

			:host input {
				appearence: none;
				background-color: var(--rdl-input-clr-bg, rgba(0, 0, 0, 0.1));
				border: var(--rdl-input-border, 1px solid transparent);
				border-radius: var(--rdl-input-border-radius, 2px);
				box-sizing: border-box;
				color: var(--rdl-input-clr, rgba(0, 0, 0, 0.9));
				display: block;
				font-weight: 400;
				line-height: 1;
				padding: 1rem;
				width: 100%;
				transition: var(--rdl-input-transition, --rdl-transition-base, all 0.2s ease-in-out);
			}

			:host input:focus {
				outline: var(--rdl-input-outline);
				outline-offset: var(--rdl-input-outline-offset);
			}
		`;
		render() {
			return html`
				<input type="text" placeholder="Placeholder">
			`;
	}
}