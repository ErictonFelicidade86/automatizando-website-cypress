/// <reference types="Cypress"/>
import HomePage from "../pages/Home_Page"

const home = new HomePage

Given(/^Que eu acesse a home PHPTravels$/, () => {
	home.vititPage()
});

When(/^Eu digitar meus dados de cadastro "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)"$/, (name,surname,email,business_name, whatsapp) => {
	home.fillPersonalInformation(name, surname, whatsapp)
	home.fillDataInformation(email, business_name)
});

When(/^resolver a função matemática$/, () => {
	home.resolveMath()
});

When(/^clicar no botão Submit$/, () => {
	home.clickBtnSubmit()
});

Then(/^tenho meus dados cadastrados com sucesso com mensagem "([^"]*)"$/, (message) => {
	cy.contains(message)
});