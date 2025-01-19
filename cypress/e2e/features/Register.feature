Feature: Resgistrar usuario para acesso ao PHPTravels Demos

Scenario Outline: Registro de usuário

Given Que eu acesse a home PHPTravels
When Eu digitar meus dados de cadastro "<name>", "<surname>", "<email>", "<business_name>", "<whatsapp>"
And resolver a função matemática
And clicar no botão Submit
Then tenho meus dados cadastrados com sucesso com mensagem "<mensagem>"

Examples:

  | name   | surname  | email                     | business_name       | whatsapp      | mensagem   |
  | Danilo | Barbosa  | danilo@email.com          | Empresa do Danilo   | 11978657865   | Thank you! |