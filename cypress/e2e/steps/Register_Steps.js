/// <reference types="Cypress"/>
import RegisterPage from "../pages/Register_Page"

const registers = new RegisterPage

Given(/^que estejamos na page de Cadastro$/, () => {
	registers.vititPage()
});

Given(/^inserimos nosso Nome "([^"]*)" e Sobrenome "([^"]*)"$/, (name, surname) => {
	console.log(name, surname);
	registers.fillNameAndSurname(name, surname)
});

Given(/^informamos nosso dados de contato "([^"]*)", "([^"]*)" e "([^"]*)"$/, (address, email, phone) => {
	console.log(address, email, phone);
	registers.fillContacs(address, email, phone)
});

Given(/^nosso genero como "([^"]*)" e hobbis "([^"]*)"$/, (gender, hobbies) => {
	console.log(gender, hobbies);
	registers.selectRadioGender(gender)
	registers.selectCheckHobbies(hobbies)
});

Given(/^nossas skill "([^"]*)" e nosso pais "([^"]*)"$/, (skill, country) => {
	console.log(skill, country);
	registers.selectSkill(skill)
	registers.selectCountry(country)
});

When(/^eu selecionar o meu nascimento "([^"]*)", "([^"]*)" e "([^"]*)"$/, (year, month, day) => {
	console.log(year, month, day);
	registers.selectBirtDay(year, month, day)
});

When(/^inserir minhas senhas "([^"]*)" e "([^"]*)"$/, (pass, confirm_pass) => {
	console.log(pass, confirm_pass);
	registers.inputPassword(pass, confirm_pass)
	registers.selectImage()
});

When(/^clico no botão cadastrar$/, () => {
	registers.btnSubmit()
});

Then(/^Tenho meu cadastro realizado com sucesso.$/, () => {});
