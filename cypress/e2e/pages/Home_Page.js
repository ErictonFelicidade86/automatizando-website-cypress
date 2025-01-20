/// <reference types="Cypress"/>
import HomeElements from "../elements/Home_Elements";

const home = new HomeElements
const url = Cypress.config("baseUrl")

class HomePage {

    vititPage() {
        cy.visit(url);
    }

    fillPersonalInformation(name, surname, whatsapp) {
        cy.get(home.inputName()).type(name);
        cy.get(home.inputLastName()).type(surname);
        cy.get(home.inputWhatsApp()).type(whatsapp);
    }

    fillDataInformation(email, business_name) {
        cy.get(home.inputBusinessName()).type(business_name);
        cy.get(home.inputEmail()).type(email);
    }

    resolveMath() {
        var number1
        var number2
        var result

        cy.get(home.getNumero01()).invoke('text').then(numberText1 => {
            number1 = parseInt(numberText1)

            cy.get(home.getNumero02()).invoke('text').then(numberText2 => {
                number2 = parseInt(numberText2)

                result = number1 + number2;

                cy.log('Resultado é:' + result)

                cy.get(home.inputResult()).type(result);
            });
        });
    }

    clickBtnSubmit() {
        cy.get(home.btnSubmit()).click();
        cy.wait(10000);
    }
} export default HomePage