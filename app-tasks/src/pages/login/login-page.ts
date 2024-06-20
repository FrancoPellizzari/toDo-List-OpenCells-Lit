// login-page.js
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('login-page')
class LoginPage extends LitElement {
   
    @state()
  private isLoggedIn = false;

  static styles = css`
    .login-container {
      max-width: 400px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .form-group {
      margin-bottom: 10px;
    }

    .form-group label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }

    .form-group input {
      width: 100%;
      padding: 8px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    .form-group button {
      width: 100%;
      padding: 10px;
      font-size: 16px;
      background-color: #6200ea;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .form-group button:hover {
      background-color: #3700b3;
    }
  `;

  

  render() {
    return html`
      <div class="container">
        ${this.isLoggedIn ? html`
          <p>You are logged in!</p>
          <button @click=${this.logout}>Logout</button>
        ` : html`
          <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" id="username">
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password">
          </div>
          <button @click=${this.login}>Login</button>
        `}
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.checkLoginStatus();
  }

  checkLoginStatus() {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    this.isLoggedIn = !!username && !!password;
  }


  login() {
    const usernameInput = this.shadowRoot?.getElementById('username') as HTMLInputElement | null;
    const passwordInput = this.shadowRoot?.getElementById('password') as HTMLInputElement | null;

    if (usernameInput && passwordInput) {
      const username = usernameInput.value;
      const password = passwordInput.value;

      if (username.length > 3 && password.length > 8) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        alert('Registration successful! Please login.');
        window.location.href = '/login';
      } else {
        alert('Username must be longer than 3 characters and password must be longer than 8 characters.');
      }
    } else {
      alert('Please enter username and password.');
    }
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    this.isLoggedIn = false;
  }
}

export default LoginPage;
