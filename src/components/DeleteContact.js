import React, { Component } from 'react';
import ContactBookServices from '../services/ContactBookServices';

class DeleteContact extends Component {
    constructor(props)
    {
        super(props)
        
             this.state={
                 id: this.props.match.params.id,
                 name:'',
                 number:'',
                 email:'',
                 address:''
             }
     
        
        this.deleteContact = this.deleteContact.bind(this);

    }//constructor

     componentDidMount()
     {
        ContactBookServices.getContactById(this.state.id).then((res) =>{
          let contact = res.data;
          this.setState({name:contact.name,
                  number:contact.number,
                  email:contact.email,
                  address:contact.address
                });
        });
           
     }
     
    

    
  deleteContact = (e) => {
        e.preventDefault();
        let contact={
           id: this.state.id,
           name: this.state.name,
           number: this.state.number,
           email: this.state.email,
           address: this.state.address
        };

        console.log(contact);
        ContactBookServices.deleteContact(this.state.id).then(res => {
            
            this.props.history.push('/contacts');
        })
      
        
    }

    cancel(){
        this.props.history.push('/contacts');
    }

    render() {
        return (
            <div>
               <div className="container">
                   <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center">Delete Contact</h3>
                          <div className="card-body">
                              <form>  
                                  <div className="form-group">
                                      <label>Contact ID: </label>
                                      <input placeholder="Id" readOnly="true" name="id" className="form-control"
                                         value={this.state.id} onChange={this.idHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Contact Name: </label>
                                      <input placeholder="Name" readOnly= "true" name="name" className="form-control"
                                         value={this.state.name} onChange={this.nameHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Contact Number: </label>
                                      <input placeholder="Number" readOnly="true" name="number" className="form-control"
                                         value={this.state.number} onChange={this.numberHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Contact Email: </label>
                                      <input placeholder="Email" readOnly="true" name="email" className="form-control"
                                         value={this.state.email} onChange={this.emailHandler} />
                                   </div>  
                                   <div className="form-group">
                                      <label>Contact Address: </label>
                                      <input placeholder="Address" readOnly="true" name="address" className="form-control"
                                         value={this.state.address} onChange={this.addressHandler} />
                                   </div>    
                                    <button className="btn btn-success" onClick={this.deleteContact}> Delete </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}> Cancel </button>                    
                              </form>
                          </div>
                      </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default DeleteContact;