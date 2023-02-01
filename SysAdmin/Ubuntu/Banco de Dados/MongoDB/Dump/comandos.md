### Comando para Gerar Dump de uma database Especifica no Mongodb
```js
mongodump --db "NomeBanco"
 --authenticationDatabase "admin - Banco de Autenticação"
  --username "Admin - Usuario"
   --password 123456
    --out /home/inlive/backup/mongodb "Caminho de saida"
```
### Lembrando que o comando é todo em uma unica linha

### Comando para Restaurar a base de dados
```js
mongorestore --authenticationDatabase admin --username Admin --password 123456 --db "nome" --dir user.bson
```