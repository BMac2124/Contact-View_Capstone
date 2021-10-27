import React, { Component } from "react";
import ContactBookService from "../services/ContactBookService";

class UpdateContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
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
    this.UpdateContact = this.UpdateContact.bind(this);
  } //constructor

  componentDidMount() {
    ContactBookService.getContactById(this.state.id).then((res) => {
      let contact = res.data;
      this.setState({
        name: contact.name,
        number: contact.number,
        email: contact.email,
        address: contact.address,
      });
    });
  }

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

  UpdateContact = (e) => {
    e.preventDefault();
    let contact = {
      id: this.state.id,
      name: this.state.name,
      number: this.state.number,
      email: this.state.email,
      address: this.state.address,
    };

    ContactBookService.UpdateContact(contact, this.state.id).then((res) => {
      this.props.history.push("/contacts");
    });
  };

  cancel() {
    this.props.history.push("/contacts");
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Update Contact</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Contact ID: </label>
                    <input
                      placeholder={this.state.id}
                      readOnly="true"
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
                    className="btn btn-success"
                    onClick={this.UpdateContact}
                  >
                    {" "}
                    Update{" "}
                  </button>
                  <button
                    className="btn btn-danger"
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

export default UpdateContact;
