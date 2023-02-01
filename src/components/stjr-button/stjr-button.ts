import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('stjr-button')

export class StjrButton extends LitElement {
	static styles = 
		css`
			:host {
				display: inline-block;
			}

			:host button {
				align-items: center;
				background-color: var(--rdl-btn-clr-bg, rgba(0, 0, 0, 0.1));
				border: var(--rdl-btn-border, 1px solid transparent);
				border-radius: var(--rdl-btn-border-radius, 2px);
				box-sizing: border-box;
				color: var(--rdl-btn-clr, rgba(0, 0, 0, 0.9));
				display: inline-flex;
				flex-direction: row;
				font-size: 1rem;
				font-weight: 400;
				gap: 0.5rem;
				line-height: 1;
				padding: 1rem;
				transition: var(--rdl-btn-transition, --rdl-transition-base, all 0.2s ease-in-out);
			}

			:host button:hover,
			:host button:focus-visible {
				background-color: var(--rdl-btn-clr-bg-hover, rgba(0, 0, 0, 0.2));
			}

			:host button:focus-visible {
				outline: var(--rdl-btn-outline);
				outline-offset: var(--rdl-btn-outline-offset);
			}
		`;
		render() {
			return html`
				<button class="rdl-btn" type="submit">
					<slot name="start"></slot>
					<slot></slot>
					<slot name="end"></slot>
				</button>
			`;
	}
}