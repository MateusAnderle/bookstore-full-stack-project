Cria e linka o bd e schema com o postgress do docker
ficar atento ao databaseurl
npx prisma migrate dev --name Create DB

agora que foi configurado, tem que rodar o container primeiro e depois rodar a api

PARA RODAR DOCKER COMPOSE - sudo docker compose up
LEMBRAR DE RODA A MIGRATE PARA CRIAR VINCULO COM O CONTAINER - npx prisma migrate dev --name Create DB
