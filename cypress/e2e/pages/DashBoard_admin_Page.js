/// <reference types="Cypress"/>

import DashboardAdminElements from "../elements/Dashboard_Admin_Elements";

const dashboard = new DashboardAdminElements

class DashboardAdminPage {
    navigateToCustomerScreen() {
        cy.get(dashboard.btnUsers()).click();
        cy.get(dashboard.btnCustomer()).click( { force: true } );
    }
} export default DashboardAdminPage