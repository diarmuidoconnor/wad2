import express from 'express';
import Contact from './contactModel';
import asyncHandler from 'express-async-handler';

const router = express.Router()

//simple router. Suggested useage
//1. Add contacts using POST /api/contacts
//2. Do a GET /api/contacts to see the list of added contacts
//3. Copy the _id value from one contact and use it to do a GET /api/contacts/:id

// get contacts
router.get('/', asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
}));

// get a contact
router.get('/:id', asyncHandler(async (req, res) => {
  const id = req.params.id; //gets id param from URL
  const contact = await Contact.findById(id);
  if (contact) {
    res.status(200).json(contact);
  } else {
    res.status(404).json({ status: 404, message: "Contact does not Exist" });
  }

}));

//Create a Contact
router.post('/', asyncHandler(async (req, res, next) => {
  const newContact = await Contact(req.body).save();
  res.status(201).json(newContact);
}));

//Update a contact
router.put('/:id', asyncHandler(async (req, res) => {
  const result = await Contact.updateOne({
    _id: req.params.id,
  }, req.body);
  if (result.matchedCount) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ code: 404, msg: 'Unable to update contact' + result });
  }
}));

export default router;