import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    productName: { type: String, required: true },
    productCode: {type: String, required: true},
    retailPrice: Number
}
);

//Make sure name starts with X with 6 numbers, 
const codeValidator = (code) => {
    let codeRegEx = /X[0-9]{6}$/;
    return codeRegEx.test(code);
};

ProductSchema.path('productCode').validate(codeValidator);

export default mongoose.model('Products', ProductSchema);