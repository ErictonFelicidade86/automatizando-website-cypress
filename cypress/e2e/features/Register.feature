Feature: Cadastro de usuários

Cadastro de usuários na plataforma

    Scenario Outline: "<Caso_teste>"

      Given que estejamos na page de Cadastro
      And inserimos nosso Nome "<name>" e Sobrenome "<surname>"
      And informamos nosso dados de contato "<address>", "<email>" e "<phone>"
      And nosso genero como "<gender>" e hobbis "<hobbies>"
      And nossas skill "<skill>" e nosso pais "<country>"
      When eu selecionar o meu nascimento "<year>", "<month>" e "<day>"
      And inserir minhas senhas "<pass>" e "<confirma_pass>"
      And clico no botão cadastrar
      Then Tenho meu cadastro realizado com sucesso.

      Examples:

        | caso_teste           | name   | surname | address                   | email            | phone       | gender | hobbies | skill      | country       | year | month   | day  | pass      | confirma_pass |
        | Cadastro com sucesso | Danilo | Barbosa | Rua Madre Maria Vilac, 178| danilo@gmail.com | 11968786960 | Male   | Movies  | Javascript | Australia     | 1975   | January | 14   | 1234@1234 | 1234@1234     |