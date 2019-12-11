import React, { Component, Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { getLeads, deleteLead } from "../../actions/leads";

const Leads = function Leads(props) {
  useEffect(() => {
    props.getLeads();
  }, []);

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
          {props.leads.map(lead => (
            <tr key={lead.id}>
              <td>{lead.id}</td>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.message}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => props.deleteLead(lead.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

const mapStateToProps = ({ leads }) => {
  return {
    leads: leads.leads
  };
};

export default connect(mapStateToProps, { getLeads, deleteLead })(Leads);
