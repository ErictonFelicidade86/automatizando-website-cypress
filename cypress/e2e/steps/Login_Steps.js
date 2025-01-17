/// <reference types="Cypress" />

import LoginPage from "../pages/Login_Page"
const login = new LoginPage


Given(/^eu acesso a página home da aplicação$/, () => {
	login.acessHomePage()
});

When(/^eu inserir meu email "([^"]*)" e minha senha "([^"]*)"$/, (email, password) => {
	console.log(email, password);
    login.accessLoginPage()
    login.fillLoginInfo(email, password)	
});

When(/^clicar no botão de entrar$/, () => {
    login.submitLogin()
});

Then(/^tenho meu acesso "([^"]*)"$/, (message) => {
	console.log(message);
    cy.contains('Dashboard')
});



