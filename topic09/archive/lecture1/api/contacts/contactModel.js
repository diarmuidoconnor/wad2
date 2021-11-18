import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name: {type: String, required:true},
    address: {type: String}
});

export default mongoose.model('Contact', ContactSchema);