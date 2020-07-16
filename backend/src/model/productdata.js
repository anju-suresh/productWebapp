const mongoose=require('mongoose');
var mongodb= 'mongodb://localhost:27017/ProductDb';
mongoose.connect(mongodb,{useNewUrlParser: true})
const schema=mongoose.Schema;

var productSchema = new schema({
    
    productId : Number,
    productName : String,
    productCode : String,
    releaseDate : String,
    description : String,
    price : Number,
    starRating : Number,
    imageUrl : String

});

var Productdata = mongoose.model('product', productSchema);
module.exports = Productdata;