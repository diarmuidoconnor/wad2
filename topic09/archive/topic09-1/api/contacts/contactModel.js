import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name: String,
    address: String});
  
export default mongoose.model('Contact', ContactSchema);