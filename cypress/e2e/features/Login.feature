Feature: Login na aplicação Admin
Feature para realizar na aplicação de Administradores PHPTravels

   Scenario Outline: Logins variados na aplicação

   Given Que acesse a page home de Login
   And que eu faço login "<tipo_login>", informando "<email>" e "<senha>"
   Then Tenho meu Login "<resultado_login>"

   Examples:
      | tipo_login  | email                | senha     | resultado_login             |
      | com sucesso | admin@phptravels.com | demoadmin | Login realizado com sucesso |