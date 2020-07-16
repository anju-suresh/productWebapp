const express = require('express');
const ProductData = require('./src/model/productdata');
const userData = require('./src/model/usersData')
const cors = require('cors');
const bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json())
app.use(cors());

app.get('/product',(req,res)=>{
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTIONS');
    ProductData.find()
        .then((products)=>{
            res.send(products);
        });
});
app.post('/insert',(req,res)=>{
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);
    var product = {
        productId : req.body.product.productId,
        productName : req.body.product.productName,
        productCode : req.body.product.productCode,
        releaseDate : req.body.product.releaseDate,
        description : req.body.product.description,
        price : req.body.product.price,
        starRating : req.body.product.starRating,
        imageUrl : req.body.product.imageUrl
    }
    var product = new ProductData(product);
    product.save();
})

app.get("/delete/:id",(req,res)=>{
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTIONS');
            id=req.params.id;
            console.log(id);
            ProductData.findOneAndDelete({_id : id}, (error, result) =>{
                if (error) {
                    throw error;
                } else {
                    res.status(200);
                    console.log("deleted")
                }
            }).then(()=>{
                ProductData.find()
                .then((products)=>{
                   res.send(products);
                });
            });
    });
    app.get("/update/:id",(req,res)=>{
        res.header('Access-Control-Allow-Origin','*')
        res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTIONS');
                id=req.params.id;
                console.log(id);
                ProductData.findOne({_id: id})
                .then((products)=>{
                    console.log(products);
                    res.send(products);
                
                });
        });
        app.post("/update",(req,res)=>{
            res.header('Access-Control-Allow-Origin','*')
            res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTIONS');
                    
                    var product = {
                        _id: req.body.product._id,
                        productId : req.body.product.productId,
                        productName : req.body.product.productName,
                        productCode : req.body.product.productCode,
                        releaseDate : req.body.product.releaseDate,
                        description : req.body.product.description,
                        price : req.body.product.price,
                        starRating : req.body.product.starRating,
                        imageUrl : req.body.product.imageUrl
                    }
                   
                    ProductData.findOne({_id: product._id})
                    .then((updateprod)=> {
                        if (!updateprod) {
                            return next(new Error('Could not load Document'));
                        }
                        else {
                            var updatedproduct = new ProductData(product);
                            console.log("findOne"+updateprod)
                            console.log("findOne update"+updatedproduct)
                            ProductData.findByIdAndUpdate(updatedproduct._id, updatedproduct, (er, updated) => {
                                console.log("updated"+updated);
                            });
                        }                
                    });  
            });


// User Details Module
            app.post('/adduser',(req,res)=>{
                res.header('Access-Control-Allow-Origin','*')
                res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTIONS');
                console.log(req.body);
                var user = {
                    name : req.body.user.name,
                    email : req.body.user.email,
                    password: req.body.user.password,
                }
                console.log("database reached")
                var users = new userData(user);
                users.save();
            })

            app.post('/authuser',(req,res)=>{
                    let users=req.body;
                    email = users.users.email,
                    password=users.users.password,
                    console.log(req.body)
                    console.log(email);
                    console.log(password);
                    console.log("logged in user");
                    userData.findOne({email: email},(err,user)=>{
                        console.log(user.email);
                        
                        console.log(user.password);
                        console.log(err);
                        if(err){
                            console.log('Invalid Credentionals');
                        }else{
                            if(user.email!==email){
                                console.log('Invalid Email')
                                res.send('Invalid Email')
                            }else
                            if(user.password!==password){
                                console.log('Invalid password')
                                res.send('Invalid Password')
                
                            }else{
                                res.status(200).send(user);
                            }
                        }    
                    });
                })
app.listen(3000,()=>{
    console.log('Listening at 3000');
})