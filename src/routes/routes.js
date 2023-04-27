import { 
    addNewContact, 
    getContacts, 
    getContactWithID, 
    updateContact,
    deleteContact } 
    from '../controllers/controller.js';

const routes = (app) => {
    app.route('/contact')
    .get(getContacts)

    .post(addNewContact)

    app.route('/contact/:contactId')
    .get(getContactWithID)

    .put(updateContact)

    .delete(deleteContact)
}

export default routes;

