/// <reference types="Cypress" />
import LoginAdminElements from "../elements/Login_Admin_Elements"

const login = new LoginAdminElements
const url = Cypress.config("baseUrlAdmin")

class LoginAdminPage {
    visitLoginAdminPage() {
        cy.visit(url);
    }

    fillLoginInformation(email, password) {
        cy.get(login.inputLogin()).type(email);
        cy.get(login.inputPassword()).type(password);
    }

    btnSubmitLogin() {
        cy.get(login.btnLogin()).click();
    }
} export default LoginAdminPage