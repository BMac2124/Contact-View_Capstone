import React, { Component } from 'react';
import ContactBookService from '../services/ContactBookService';


class ListContacts extends Component {
      constructor(props)
      {
          super(props)
          this.state={
                contacts:[] 
          }
          this.addContact=this.addContact.bind(this);
          this.editContact=this.editContact.bind(this);
          this.deleteContact=this.deleteContact.bind(this);
          this.viewContact=this.viewContact.bind(this);
      }
    
     componentDidMount() {
         ContactBookService.getContacts().then((res) => {
             this.setState({contacts:res.data});
         });
     }
     
     addContact()
     {
        
        this.props.history.push('/add-contact');
     }

     editContact(id)
     {
        this.props.history.push(`/update-contact/${id}`);
        
     }

     deleteContact(id)
     {
        this.props.history.push(`/delete-contact/${id}`);
        // StudentService.deleteStudent(id).then(res => {
        //     this.setState({
        //          student: this.state.students.filter(student => student.id !== id)
        //     })
        // })
        
     }

     viewContact(id)
     {
        this.props.history.push(`/view-contact/${id}`);
        
     }

    render() {
        return (
            <div>
                <h2 className="text-center">Contact List 📃</h2>
                <div> 
                    <button className="btn btn-light" onClick={this.addContact}> Add Contact</button>
                </div>
                <div>
                    <p></p>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Contact Id</th>
                                <th>Contact Name</th>
                                <th>Contact Number</th>                        
                                <th>Contact Email</th>
                                <th>Contact Address</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.contacts.map(
                                     contact =>
                                     <tr key={contact.id}>
                                         <td>{contact.id}</td>
                                         <td>{contact.name}</td>
                                         <td>{contact.number}</td>
                                         <td>{contact.email}</td>
                                         <td> {contact.address}</td>
                                         <td>
                                            <button onClick={() =>this.editContact(contact.id)} className="btn btn-dark">Update</button> 
                                            <button onClick={() =>this.deleteContact(contact.id)} className="btn btn-light">Delete</button> 
                                            <button onClick={() =>this.viewContact(contact.id)} className="btn btn-dark">View</button> 
                                         </td>
                                     </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default ListContacts;