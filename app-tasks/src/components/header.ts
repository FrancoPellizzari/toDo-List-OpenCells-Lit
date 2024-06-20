// header-component.js
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { PageController } from '@open-cells/page-controller';

const translations = {
  en: {
    home: 'Home',
    tasks: 'To Do List',
    login: 'Login',
    counter: 'Counter'
  },
  es: {
    home: 'Inicio',
    tasks: 'Lista de Tareas',
    login: 'Iniciar Sesión',
    counter: 'Contador'
  },
};

@customElement('header-component')
class HeaderComponent extends LitElement {
  pageController = new PageController(this);
  static styles = css`
    header {
      background-color: #6200ea;
      color: white;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    nav a {
      color: white;
      margin: 0 10px;
      text-decoration: none;
    }

    nav a:hover {
      text-decoration: underline;
    }

    .back-icon {
      display: none; /* Por defecto, ocultar el icono de retroceso */
    }

    .show-back .back-icon {
      display: block; /* Mostrar el icono de retroceso cuando se aplica la clase 'show-back' */
    }
  `;

  @state()
  private showBackIcon = false;

  connectedCallback() {
    super.connectedCallback();
    // Lógica para determinar si mostrar el icono de retroceso
    const currentPath = window.location.pathname;
    this.showBackIcon = currentPath !== '/'; // Ejemplo: Mostrar el icono si no estamos en la página principal
  }

  @state()
  private currentLanguage: 'en' | 'es' = 'en';

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'en' ? 'es' : 'en';
  }

  goBack() {
    window.history.back(); // Función para retroceder en la historia del navegador
  }  

  render() {
    return html`
      <header>
        <div>Logo</div>
        <nav>
          <a href="/">${translations[this.currentLanguage].home}</a>
          <a href="/tasks">${translations[this.currentLanguage].tasks}</a>
          <a @click=${() => this.pageController.navigate('login')}>${translations[this.currentLanguage].login}</a>
          <a @click=${() => this.pageController.navigate('contador')}>${translations[this.currentLanguage].counter}</a>
          <a  class=/*"back-icon ${this.showBackIcon ? 'show-back' : ''}" @click=${this.goBack} */>⬅️</a>
          
        </nav>
        <div>
          <button @click=${this.toggleLanguage}>${this.currentLanguage === 'en' ? 'EN' : 'ES'}</button>
        </div>
      </header>
    `;
  }

  
 
}
