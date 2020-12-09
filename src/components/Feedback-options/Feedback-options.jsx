// import React from "react";
import React from "react";
import PropTypes from "prop-types";
import "./Feedback-options.css";


const FeedbackOptions = (
    {options,
    onLeaveFeedback }
) => {
    return options.map((option) => {
        return <button key={option}
            className="Feedback__btn"
            type="button"
            onClick={() => onLeaveFeedback({option})}
        >{option}
        </button>
    });   
}
FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;