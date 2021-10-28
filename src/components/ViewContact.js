import React, { Component } from "react";
import ContactBookService from "../services/ContactBookService";

class ViewContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      contact: {},
    };
  } //constructor

  componentDidMount() {
    ContactBookService.getContactById(this.state.id).then((res) => {
      this.setState({ contact: res.data });
    });
  }

  back() {
    this.props.history.push("/contacts");
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div>
              <h3 className="text-center">View Contact Info</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Contact ID: </label>
                    <input
                      placeholder={this.state.contact.id}
                      readOnly="true"
                      name="id"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Contact Name: </label>
                    <input
                      placeholder={this.state.contact.name}
                      readOnly="true"
                      name="name"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Contact Number: </label>
                    <input
                      placeholder={this.state.contact.number}
                      readOnly="true"
                      name="number"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label>Contact Email: </label>
                    <input
                      placeholder={this.state.contact.email}
                      readOnly="true"
                      name="email"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label>Contact Address: </label>
                    <input
                      placeholder={this.state.contact.address}
                      readOnly="true"
                      name="address"
                      className="form-control"
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={this.back.bind(this)}
                  >
                    {" "}
                    Back{" "}
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

export default ViewContact;
