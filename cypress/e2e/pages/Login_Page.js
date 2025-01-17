/// <reference types="Cypress"/>

import HomeElements from '../elements/Home_Elements'  //Importando os Elementos do Home
import LoginElements from '../elements/Login_Elements' //Importando os Elementos do Login

const home = new HomeElements
const login = new LoginElements

const url = Cypress.config('baseUrl')

class LoginPage {

    acessHomePage () {
        cy.visit(url);
        cy.wait(3000);
        cy.get(home.btnHideCookie()).click()
    }

    accessLoginPage () {
        cy.contains(home.selectAccount()).click()
        cy.contains(home.submitLogin()).click()
    }

    fillLoginInfo (email, password) {
        cy.get(login.inputEmail()).type(email);
        cy.get(login.inputPassword()).type(password);
    }

    submitLogin () {
        cy.get(login.submitLogin()).click();
    }
}
export default LoginPage