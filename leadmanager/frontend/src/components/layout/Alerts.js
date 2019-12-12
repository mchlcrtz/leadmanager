import React, { Fragment, useEffect, useRef } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";

export const Alerts = function Alerts(props) {
  
  const { error, alert, message } = props;
  const prevErrorRef = useRef();
  const prevMessageRef = useRef();

  useEffect(() => {
    prevErrorRef.current = error;
    prevMessageRef.current = message;
    if (error !== prevErrorRef.current) {
      if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
      if (error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
      if (error.msg.message)
        alert.error(`Message: ${error.msg.message.join()}`);
      if (error.msg.non_field_errors)
        alert.error(error.msg.non_field_errors.join());
      if (error.msg.username) alert.error(error.msg.username.join());
    }

    if (message !== prevMessageRef.current) {
      if (message.deleteLead) alert.success(message.deleteLead);
      if (message.addLead) alert.success(message.addLead);
      if (message.passwordNotMatch) alert.error(message.passwordNotMatch);
    }
  });

  return <Fragment />;
};

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
});

export default connect(mapStateToProps)(withAlert(Alerts));
