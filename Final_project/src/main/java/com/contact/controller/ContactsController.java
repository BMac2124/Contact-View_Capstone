package com.contact.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



import com.contact.model.Contact;
import com.contact.repository.ContactRepository;
import com.contact.exception.ContactResourceException;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/apicontact/")
public class ContactsController {

@Autowired
	private ContactRepository contactRepo;
    


	//get all students
	
	@GetMapping("/allcontacts")
	public List<Contact> getAllContacts()
	{
		
		return contactRepo.findAll();
	}
	

	@PostMapping("/addcontact")
    public Contact newContact(@RequestBody Contact c)
    {
		
		return contactRepo.save(c);
    }
	
	
	@GetMapping("/contact/{id}")
	public ResponseEntity<Contact> getContactById(@PathVariable int id)
	{
		Contact c= contactRepo.findById(id).orElseThrow(() ->  new ContactResourceException("Contact not found"));
		return ResponseEntity.ok(c);                 
	}
	
	@GetMapping("/contacts/{name}")
	public List<Contact> getContactByName(@PathVariable String name)
	{
		
		List <Contact> contacts=contactRepo.findByName(name);
		if(contacts.isEmpty())
		{
			System.out.println(new ContactResourceException("Contact(s) with the name "+ name +" not found"));
		}
		
		return contactRepo.findByName(name);
	}
	
	
	@PutMapping("/contact/{id}")
	public ResponseEntity<Contact> updateContact(@PathVariable int id, @RequestBody Contact contact)
	{
		Contact c= contactRepo.findById(id).orElseThrow(() ->  new ContactResourceException("Contact not found"));
	    c.setName(contact.getName());
	    c.setNumber(contact.getNumber());
	    c.setEmail(contact.getEmail());
	    c.setAddress(contact.getAddress());
	    Contact updatedContact=contactRepo.save(c);
	    return ResponseEntity.ok(updatedContact);
	}
	

	
	@DeleteMapping("/contact/{id}")
	public String deleteContact(@PathVariable int id)
	{
		contactRepo.findById(id).orElseThrow(() ->  new ContactResourceException("Contact not found"));
	    contactRepo.deleteById(id);
	    return "The contact with id: "+ id +" is removed from the database.";
	}
	
}
