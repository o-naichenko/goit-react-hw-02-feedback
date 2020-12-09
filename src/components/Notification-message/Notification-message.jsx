import React from "react";
import PropTypes from "prop-types";
import "./Notification-message.css";

const NotificationMessage = ({ message }) =>
    <b className="Notification-message">{message}
    </b>;
    
NotificationMessage.propTypes = {
    message: PropTypes.string.isRequired,
}

export default NotificationMessage;