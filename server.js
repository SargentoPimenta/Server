const express = require("express");
const{ router } = "./"
const{ PrismaClient } = require("@prisma/client");


const app = express();


app.use(express.json());
app.use(router);

app.listen(8080,() => {
    console.log ("Rodando na porta 8080")
})






//mpm init -y
//npm i express
//npm i prisma --save-dev
//npx prisma init --datasource-provider sqçite
//npx prisma migrate dev --name init