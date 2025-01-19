/// <reference types="Cypress"/>

import LoginAdminPage from "../pages/Login_Admin_Page"

const loginAdmin = new LoginAdminPage


Given(/^Que acesse a page home de Login$/, () => {
    loginAdmin.visitLoginAdminPage()
});

Given(/^que eu faço login "([^"]*)", informando "([^"]*)" e "([^"]*)"$/, (type,email,password) => {
	loginAdmin.fillLoginInformation(email, password)
    loginAdmin.btnSubmitLogin()
});

Then(/^Tenho meu Login "([^"]*)"$/, (result) => {
	if (cy.contains('Dashboard')){
        cy.log(result)
    }else {
        cy.log('Login não realizado')
    }
});
