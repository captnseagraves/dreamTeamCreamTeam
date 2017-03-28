```1. npm i express-generator --save --maybe not necessary if globally installed
2. express
  -this is the shortcut to use express-generator for this app
3. npm install
    --install all the dependencies
4. open atom
5. in app.js change view from jade to ejs or hbs
6. in views change from .jade to .ejs
7. change layout.ejs to head.ejs and add link/script tags
8. link your head.ejs to other pages using <%- include('head') -%>
9. create framework for index page
10. npm install pg --save
   npm install knex --save
11. two files: knexfile.js: connection w/ data, diff env configurations
              knex.js: configure knex node package
12. knex migrate:make table name; makes migration file, timestamp table.js
   a. exports.up create table
   b. exports.down drop table
   c. knex migrate:latest --uses the latest created edited migration table-
         --otherwise used rollback
13. knex seed:make 1_users;
   insert data into table as key value pairs
   like this: an array of objects
   [{
     name: 'Del',
     points: 500
   }]
14. knex seed:run;  -- to add data to table
