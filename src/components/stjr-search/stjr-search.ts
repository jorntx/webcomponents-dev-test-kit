import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@stjr/button';
import '@stjr/input';
import '@stjr/stack';

@customElement('stjr-search')

export class StjrSearch extends LitElement {
	static styles = 
		css`
			:host {
				display: block;
			}
		`;
		render() {
			return html`
				<div class="stjr-search">
					<form action="#">
						<stjr-stack direction="horizontal" gap="none">
							<stjr-input></stjr-input>
							<stjr-button>Search</stjr-button>
						</stjr-stack>
					</form>
				</button>
			`;
	}
}