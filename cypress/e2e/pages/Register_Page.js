/// <reference types="Cypress"/>
import RegisterElements from "../elements/Register_elements"

const registerElements = new RegisterElements
const url = 'https://demo.automationtesting.in/Register.html'

class RegisterPage {

    vititPage() {
        cy.visit(url);
    }

    fillNameAndSurname(name, surname) {
        cy.get(registerElements.inputFirstName()).type(name);
        cy.get(registerElements.inputLastName()).type(surname);
    }

    fillContacs(address, email, phone) {
        cy.get(registerElements.inputAddress()).type(address);
        cy.get(registerElements.inputAddressEmail()).type(email);
        cy.get(registerElements.inputPhoneNumber()).type(phone);
    }

    selectRadioGender(gender) {
        cy.get(registerElements.checkRadioGender()).check(gender);
    }
    
    selectCheckHobbies(hobbies) {
        cy.get(registerElements.checkHobbies()).check(hobbies);
    }

    selectLangueges(){}

    selectSkill(skill) {
        cy.get(registerElements.inputSkill()).select(skill);
    }

    selectCountry(country) {
        cy.get(registerElements.selectCountry()).select(country, {force: true});
    }

    selectBirtDay(year, month, day) {
        cy.get(registerElements.selectYear()).select(year);
        cy.get(registerElements.selectMonth()).select(month);
        cy.get(registerElements.selectDay()).select(day);
    }

    inputPassword(pass, confirmPass) {
        cy.get(registerElements.inputPass()).type(pass);
        cy.get(registerElements.inputConfirmPass()).type(confirmPass);
    }

    btnSubmit() {
        cy.get(registerElements.submitRegister()).click();
    }

    selectImage() {
        cy.get(registerElements.selectFile()).selectFile('cypress/downloads/eu.jpg');
    }
}
export default RegisterPage