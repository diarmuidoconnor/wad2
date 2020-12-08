import express from 'express';
import Contact from './contactModel';

const router = express.Router();

//simple router. Suggested useage
//1. Add contacts using POST /api/contacts
//2. Do a GET /api/contacts to see the list of added contacts
//3. Copy the _id value from one contact and use it to do a GET /api/contacts/:id

//get all contacts
router.get('/', async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  });

// get a contact
router.get('/:id', async (req, res) => {
    const id = req.params.id; //gets id param from URL
    const contact = await Contact.findById(id);
    return res.status(200).json(contact);
  });

// add a contact (simple - no validation or body checking)
  router.post('/', async (req, res, next) => {
  try{
    if (req.body.name) {
      const newContact = await new Contact(req.body).save();
      res.status(201).json(newContact);}
    else{
      res.status(400).json({"status":400, "message":"No Body"});}
  }catch(err){
    next(err);
  }
  });
  
  router.put('/:id', async (req, res, next) => {
    if (req.body._id) delete req.body._id;
    const query = { _id: req.params.id };
    const result = await Contact.update(query, req.body);
    res.status(201).json(result);
  });

export default router;