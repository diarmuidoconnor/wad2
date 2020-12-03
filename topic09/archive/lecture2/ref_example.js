import dotenv from 'dotenv';
import './db';
import Product from './api/products/productModel';
import Contact from './api/contacts/contactModel';
dotenv.config();

//Demo of Referencing in Mongoose: Error handling left out to simplify code.
//to run, type npx babel-node ref_example.js at the command line.

const createData = async () => {

        //Create a product
        const product1 = await new Product({
            productName: "PS5",
            productCode: "X123456"
        }).save();

        //Create contact and add product IDs
        const contact1 = await new Contact({
            name: "Frank Walsh",
            age: 22,
            productsPurchased: [product1._id]
        }).save();

        //query db for contact and populate productsPurchaced field
        const contact = await Contact.findById(contact1._id).populate('productsPurchased');
        console.log(JSON.stringify(contact, null, "\t"));
   
    //nothing more to see here - exit the process.
    process.exit();

};

createData();