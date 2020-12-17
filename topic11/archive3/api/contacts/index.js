import express from 'express';
import Contact from './contactModel';

const router = express.Router();

// add a contact (simple - no validation or body checking)
router.post('/', (req, res) => {
  new Contact(req.body).save()
    .then(contact => res.status(201).json(contact));
});

// update a contact (simple - no validation or body checking)
router.put('/:id', (req, res, next) => {
  if (req.body._id) delete req.body._id;
  const query = { _id: req.params.id };
  Contact.update(query, req.body)
    .then(result => res.status(201).json(result));
});


//simple router. Suggested useage
//1. Add contacts using POST /api/contacts
//2. Do a GET /api/contacts to see the list of added contacts
//3. Copy the _id value from one contact and use it to do a GET /api/contacts/:id

//get all contacts
router.get('/', (req, res) => {
  Contact.find()
  .then(contacts =>res.status(200).json(contacts))
});

// get a contact
router.get('/:id', async (req, res) => {
  const id = req.params.id; //gets id param from URL
  Contact.findById(id)
  .then(contact=>res.status(200).json(contact));
});


export default router;