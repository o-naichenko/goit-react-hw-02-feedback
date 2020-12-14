import React from "react";
import PropTypes from "prop-types";
import s from "./Notification-message.module.css";

const NotificationMessage = ({ message }) =>
    <b className={s.message}>{message}
    </b>;
    
NotificationMessage.propTypes = {
    message: PropTypes.string.isRequired,
}

export default NotificationMessage;