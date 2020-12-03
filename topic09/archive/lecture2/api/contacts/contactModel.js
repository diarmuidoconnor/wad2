import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name: { type: String, required: true },
    address: String,
    age: {
        type: Number,
        min: 0,
        max: 120,
        required: true
    },
    email: String,
    updated: {
        type: Date,
        default: Date.now
    },
    productsPurchased: [{type: mongoose.Schema.Types.ObjectId, ref: 'Products'}]
}
);

//Make sure name starts with capital letter, 
const nameValidator = (name) => {
    let nameRegEx = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
    return nameRegEx.test(name);
};

ContactSchema.path('name').validate(nameValidator);

export default mongoose.model('Contact', ContactSchema);