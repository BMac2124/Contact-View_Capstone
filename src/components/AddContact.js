import React, { Component } from "react";
import ContactBookService from "../services/ContactBookService";

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      number: "",
      email: "",
      address: "",
    };

    this.idHandler = this.idHandler.bind(this);
    this.nameHandler = this.nameHandler.bind(this);
    this.numberHandler = this.numberHandler.bind(this);
    this.emailHandler = this.emailHandler.bind(this);
    this.addressHandler = this.addressHandler.bind(this);
  } //constructor

  idHandler = (event) => {
    this.setState({
      id: event.target.value,
    });
  };

  nameHandler = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  numberHandler = (event) => {
    this.setState({
      number: event.target.value,
    });
  };

  emailHandler = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  addressHandler = (event) => {
    this.setState({
      address: event.target.value,
    });
  };

  saveContact = (e) => {
    e.preventDefault();
    let contact = {
      id: this.state.id,
      name: this.state.name,
      number: this.state.number,
      email: this.state.email,
      address: this.state.address,
    };
    console.log(contact);
    ContactBookService.createContact(contact)
      .then((res) => {
        this.props.history.push("/contacts");
      })
      .catch((err) => {
        console.log("record not logged!");
      });
  }; //closing save method

  cancel() {
    this.props.history.push("/contacts");
  }

  render() {
    return (
      <div>
        <div className="box">
          <div className="row">
            <div>
              <h3 className="text-center">Add ➕ Contact</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Contact ID: </label>
                    <input
                      placeholder="Id"
                      name="id"
                      className="form-control"
                      value={this.state.id}
                      onChange={this.idHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Contact Name: </label>
                    <input
                      placeholder="Name"
                      name="name"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.nameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Contact Number: </label>
                    <input
                      placeholder="Number"
                      name="number"
                      className="form-control"
                      value={this.state.number}
                      onChange={this.numberHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Contact Email: </label>
                    <input
                      placeholder="Email"
                      name="email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.emailHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Contact Address: </label>
                    <input
                      placeholder="Address"
                      name="address"
                      className="form-control"
                      value={this.state.address}
                      onChange={this.addressHandler}
                    />
                  </div>
                  <button
                    className="btn btn-light"
                    onClick={this.saveContact}
                  >
                    {" "}
                    Save{" "}
                  </button>
                  <button
                    className="btn btn-dark"
                    onClick={this.cancel.bind(this)}
                  >
                    {" "}
                    Cancel{" "}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddContact;
