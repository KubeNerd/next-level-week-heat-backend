#Configuração do projeto
   https://efficient-sloth-d85.notion.site/Node-js-2ce18c79723948c5979cf26aef05c39a


Instalação do prisma
    npm install prisma

Inicialização
    npx prisma init


#Instalação da extensão
    prisma
    prisma - insider



#Inicialização das migrations
    npx prisma migrate dev
    --Setei o nome create-users


#Cadastro de usuário
    O usuário irá logar usando o github na rota http://localhost:4000/github

#Autenticação
    O usuário irá autenticar na rota http://localhost:4000/authenticate
        Metodo
            {
	            "code":"a586151255046b91fe33"
            }

#Cadastro de mensagens
    Metodo
        Post
            {
                "message":"Testando aqui, a ferramenta suprema DoWhile 2021/6",
                "user_id":"a79574c7-77e1-41d8-8ba9-e981b952b434"
            }

#Obtendo as 3 ultimas postagens(menssagens) do usuário
    Metodo GET
        Acesse a rota localhost:4000/messages/last3

