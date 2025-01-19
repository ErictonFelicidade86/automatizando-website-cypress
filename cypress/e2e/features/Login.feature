Feature: Login
Funcionalidade para realizar variados Logins no sistema PHPTravels

Scenario Outline: "<cenarios>"

  Given eu acesso a página home da aplicação
  When eu inserir meu email "<email>" e minha senha "<senha>"
  And clicar no botão de entrar
  Then tenho meu acesso "<mensagem>"

  Examples:
    | cenario            | email                  | senha      | mensagem                |
    | Login com sucesso  | user@phptravels.com    | demouser   | com sucesso na aplicação|