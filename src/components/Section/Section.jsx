import React from "react";
import PropTypes from "prop-types";
import "./Section.css";

const Section = ({ title, children }) => {
    return <section className="Section">
        <h2 className="Section__title">{title}</h2>
        {children}
    </section>;
}
    

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
}

export default Section;