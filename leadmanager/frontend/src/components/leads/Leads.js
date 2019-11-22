import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getLeads } from "../../actions/leads";

class Leads extends Component {
  componentDidMount() {
    this.props.getLeads();
  }
  render() {
    return (
      <Fragment>
        <h1>Leads List</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.leads.map(lead => (
              <tr key={lead.id}>
                <td>{lead.id}</td>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.message}</td>
                <td>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ leads }) => {
  return {
    leads: leads.leads
  };
};

export default connect(mapStateToProps, { getLeads })(Leads);
