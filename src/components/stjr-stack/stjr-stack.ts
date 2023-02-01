import { LitElement, html, css } from "lit";
import { customElement } from 'lit/decorators.js';

@customElement('stjr-stack')

class stjrStack extends LitElement {
	static styles =
		css`
			:host {
				align-items: stretch;
				display: flex;
				flex-direction: column;
				gap: var(--stjr-stack-gap, 1rem);
			}

			::slotted(*) {
				background-color: rgba(0, 40, 255, 0.1);
				border: 1px solid rgba(0, 40, 255, 0.1);
				flex: 1;
				transition: all 0.1s ease-in-out;
			}

			::slotted(*:hover) {
				background-color: rgba(0, 40, 255, 0.15);
				border: 1px solid rgba(0, 40, 255, 0.15);
			}

			/* Direction, start */
			:host([direction=horizontal]) {
				flex-direction: row;
			}
			/* Direction, stop */

			/* Gap, start */
			:host([gap=none]) {
				--stjr-stack-gap: 0;
			}
			:host([gap=s]) {
				--stjr-stack-gap: 0.5rem;
			}
			:host([gap=l]) {
				--stjr-stack-gap: 2rem;
			}
			/* Gap, stop */

			/* Justify Content, start */
			:host([justify-content=center]) ::slotted(*),
			:host([justify-content=start]) ::slotted(*),
			:host([justify-content=end]) ::slotted(*) {
				flex: initial;
			}

			:host([justify-content=center]) {
				justify-content: center;
			}
			:host([justify-content=start]) {
				justify-content: start;
			}
			:host([justify-content=end]) {
				justify-content: end;
			}
			/* Justify Content, stop */
	
			/* Align Items, start */
			:host([align-items=center]) {
				align-items: center;
			}
			:host([align-items=start]) {
				align-items: start;
			}
			:host([align-items=end]) {
				align-items: end;
			}
			:host([align-items=baseline]) {
				align-items: baseline;
			}
			:host([align-items=space-between]) {
				align-items: space-between;
			}
			:host([align-items=space-around]) {
				align-items: space-around;
			}
			:host([align-items=space-evenly]) {
				align-items: space-evenly;
			}
			/* Align Items, stop */
		`;
		render() {
			return html`
			<slot></slot>
		`;
	}
}
