## Rodando a Aplicação:
Após clonar o repositório e instalar as dependências, siga os passos:

Antes de rodar a aplicação, execute:
- `npm run pre-start`.
    - Esse comando vai construir o schema e as tabelas, caso não existam, e vai limpa-las caso existam.

Para rodar a aplicação utilize:
- `npm start`.

### Observações:
 - O comando de iniciação precisa ser executado toda vez que uma ação precisa ser acionada. Esse é um ponto que pode ser aprimorado, levando em conta a experiência do usuário.
 - Eslint: seguindo a proposta do teste não instalei nenhuma biblioteca externa, porém tomei cuidado extra para manter o código padronizado.
 - Testes: Todos os testes foram feitos manualmente pela questão do tempo.
 - Sobre o funcionamento: Para os fins do testes, as funções são mais "engesadas" que o normal.

## Readme do Teste:
```txt
Criar um aplicativo console em nodejs que implemente os seguintes requisitos.

1. Consumir a API (https://datausa.io/api/data?drilldowns=Nation&measures=Population) e gravar o resultado na tabela "api_data" no na coluna "doc_record".
Saida da API:
{"data":[{"ID Nation":"01000US","Nation":"United States","ID Year":2020,"Year":"2020","Population":326569308,"Slug Nation":"united-states"},...

2. Realizar a somatoria da propriedade "Population" dos anos 2020, 2019 e 2018 e appresentar o resultado no console.
Implementar de duas formas o algoritmo:
    a. em memoria no nodejs usando map, filter, for etc
    b. usando SELECT no postgres, pode fazer um SELECT inline no nodejs.
    c. usando SELECT no postgres, pode fazer uma VIEW no banco de dados.

Obrigatório:
Utilizar somente as libs instalas no projeto massivejs e axios.
Não instalar nenhuma outra lib de terceiro e não utilizar TypeScript.
Trocar a propriedade DATABASE_SCHEMA para o id do seu usuario do github e  

Referencias:
https://massivejs.org/
https://axios-http.com/

Ferramentas:
https://tableplus.com/
Postgres: por utilizar o PG fornecido pela nuvem HEROKU a string de conexao está no arquivo .env
```