package com.contact.model;



//import javax.persistence.Column;
import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "contacts")
public class Contact {
	@Id
	
	private int id; // int
	
	//@column is defining names of columns for table fields
//	@Column(name = "name")
	private String name; // varchar
//	@Column(name = "number")
  private String number; // int
//	@Column(name = "email")
  private String email;
//	@Column(name = "address")
  private String address;
	
  public Contact() {
  	
  	
  }
  
  
  public Contact(String name, String number, String email, String address) {
		super();
		this.name = name;
		this.number = number;
		this.email = email;
		this.address = address;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getNumber() {
		return number;
	}
	public void setNumber(String number) {
		this.number = number;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
  
  
}
 