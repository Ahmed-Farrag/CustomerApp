# mvp : model view presenter  =  problem capling between action and view
# mvc : model view controler

# views by express  = templete engines

## priject:
- install application generator
> npx express-generator --view=ejs 


###### MVC Simple Project ########
        (CRUD & Search)
folder: 
model 
public
routes
views

> npm i --y 
> npm i express joi mongoose


require to joi and mongoose in Customer file in model then Schema  and make function to validate customer
in routes folder create customer.js and require express and router and make require from model to vailidate and Customer
and make crud
>npm i ejs
server.js : require to mongoose , express , listen, middleware = express.json - expressurlencodeed  / connct to db
confige ejs in server.js : app.set('view engine', 'ejs')

>npm i bootstrap
make middleware to css : in server.js app.use('/css' , express.static(__dirname + '/nodemodules/bootstrap/dist/css))
make middleware to img : in server.js app.use('/public' , express.static(__dirname + '/public))

create file: index.ejs
get example from : https://getbootstrap.com/
handel index.ejs : eturation to functinalty <%%> : write js with html in file

in customer.js in router.get('/',){res.render('index', {customers: customers})}

in server.js : app.use('/api/customer', customers)



// faker librare
in routes folder make file faker.js
>npm i faker
require express and router and faker and ../models/customer
and make function in this file => look it 
and call it in serverfile:
const fakeData = require("/routes/faker");
app.use("/api/fake", fakeData);

//method-override from npm to use http verbs as PUT or DELETE
//require it and take the method from npm and put it in server.js file

// make search method and RegExp in it