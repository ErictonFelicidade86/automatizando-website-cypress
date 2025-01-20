/// <reference types="Cypress"/>

import CustomerElements from "../elements/Customers_Elements"

const customer = new CustomerElements

class CustomerPage {
    addNewUser() {
        cy.get(customer.btnAdd()).click();
    }

    verifyCreateUser(email) {
        cy.contains(email)
    }
} export default CustomerPage