import { startApp } from '@open-cells/core';
import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { ElementController } from '@open-cells/element-controller';
import { routes } from '../router/routes.js';
import { styles } from './app-index.css.js';
import { css } from 'lit';
import './header.js';

// app-index.js
startApp({
  routes,
  mainNode: 'app-content',
  viewLimit: 2,
  persistentPages: ['home'],

 });

@customElement('app-index')
class AppIndex extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    main {
      padding: 16px;
    }
  `;

  render() {
    return html`
      <header-component></header-component>
      <main role="main" tabindex="-1">
        <slot></slot>
      </main>
    `;
  }
}
