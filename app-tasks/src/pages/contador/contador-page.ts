import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';



@customElement('contador-page')
class ContadorPage extends LitElement {
  @state()
  private count: number = 0;

  static styles = css`
    /* Estilos del componente */
  `;

  render() {
    return html`
      <div>
        <p>Count: ${this.count}</p>
        <button @click=${this.incrementCount}>Increment</button>
      </div>
    `;
  }

  private incrementCount() {
    this.count += 1;
  }
}
