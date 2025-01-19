/// <reference types="Cypress"/>
import Dashboard from "../pages/DashBoard_admin_Page"
import CustomersRegisterPage from "../pages/Customer_Register_Page"
import CustomerPage from "../pages/Customer_Page"
import LoginAdminPage from "../pages/Login_Admin_Page"


const dashboardAdmin = new Dashboard
const registerPage = new CustomersRegisterPage
const customerPage = new CustomerPage
const loginAdmin = new LoginAdminPage


Given(/^que acesse a page home de login$/, () => {
	loginAdmin.visitLoginAdminPage()
});

Given(/^que eu faço login "([^"]*)", informando "([^"]*)" e "([^"]*)"$/, (type,email,password) => {
	loginAdmin.fillLoginInformation(email, password)
    loginAdmin.btnSubmitLogin()
});

Then(/^queira cadastrar novos usuários$/, () => {
	dashboardAdmin.navigateToCustomerScreen()
    customerPage.addNewUser()
});

When(/^eu inserir os dados pessoais nome "([^"]*)", sobrenome "([^"]*)", email "([^"]*)", senha "([^"]*)" e telefone "([^"]*)"$/, (name,surname,email,pass,phone) => {
	registerPage.fillCustomerInformation(name, surname, email, pass, phone)
});

When(/^selecionar as configurações do cliente status "([^"]*)", tipo "([^"]*)" e moeda "([^"]*)"$/, (status,type,currency) => {
	registerPage.selectUserStatus(status)
    registerPage.selectUserType(type)
    registerPage.selectCurrency(currency)
});

When(/^clicar em registrar$/, () => {
	registerPage.btnRegister()
});

Then(/^Tenho meu usuario "([^"]*)" cadastrado com sucesso e listado na tela users$/, (email) => {
	customerPage.verifyCreateUser(email)
});
