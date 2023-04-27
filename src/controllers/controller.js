import mongoose from 'mongoose';
import { ContactSchema } from '../models/model.js';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);
    newContact.save()
    .then((data) => {
        res.json(data)
    })
    .catch((err) => {
        res.send(err)
    })
};

export const getContacts = (req,res) => {
    Contact.find({})
    .then((data) => {
        res.json(data)
    })
    .catch((err) => {
        res.send(err)
    })
};

export const getContactWithID = (req, res) => {
    Contact.findById(req.params.contactId)
    .then((data) => {
        res.json(data)
    })
    .catch((err) => {
        res.send(err)
    })
};

export const updateContact = (req, res) => {
    Contact.findOneAndUpdate({ _id: req.params.contactId}, req.body, { new: true })
    .then((data) => {
        res.json(data)
    })
    .catch((err) => {
        res.send(err)
    })
};

export const deleteContact = (req, res) => {
    Contact.deleteOne({ _id: req.params.contactId })
    .then(() => {
        res.json({ message: 'Successfully deleted contact'});
    })
    .catch((err) => {
        res.send(err)
    })
    
};