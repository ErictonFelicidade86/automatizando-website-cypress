/// <reference types="Cypress"/>

import CustomersRegisterElements from "../elements/Customers_Register_Elements";

const customerRegister = new CustomersRegisterElements

class CustomerRegisterPage {
    selectUserStatus(status) {
        cy.get(customerRegister.selectStatusUser()).select(status, { force: true });
    }

    selectUserType(type) {
        cy.get(customerRegister.selectUserType()).select(type, { force: true });
    }

    selectCurrency(currency) {
        cy.get(customerRegister.selectCurrency()).select(currency, { force: true } );
    }

    fillCustomerInformation(name, surname, email, pass, phone) {
        cy.get(customerRegister.inputName()).type(name);
        cy.get(customerRegister.inputLastName()).type(surname);
        cy.get(customerRegister.inputEmail()).type(email);
        cy.get(customerRegister.inputPass()).type(pass);
        cy.get(customerRegister.inputPhone()).type(phone);
    }

    btnRegister() {
        cy.get(customerRegister.btnSave()).click();
    }
} export default CustomerRegisterPage