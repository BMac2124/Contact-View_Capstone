import axios from 'axios';

// Make sure you add the port here.
const CONTACT_BOOK_API_BASE_URL= "http://localhost:8080/apicontact";
class ContactBookService{

    getContacts(){  // Gets all contacts
       return axios.get(CONTACT_BOOK_API_BASE_URL+"/allcontacts");
    }

    createContact(contact){ //adding contact
        return axios.post(CONTACT_BOOK_API_BASE_URL+"/addcontact",contact);
    }

    getContactById(id){ //grabbing specific id for contact
        return axios.get(CONTACT_BOOK_API_BASE_URL+"/contact/"+id);
    }

    updateContact(contact,id){//updates to contact
        return axios.put(CONTACT_BOOK_API_BASE_URL+"/contact/"+id,contact);
    }

    deleteContact(id){// deleting contact
        return axios.delete(CONTACT_BOOK_API_BASE_URL+"/contact/"+id);
    }

}

export default new ContactBookService();