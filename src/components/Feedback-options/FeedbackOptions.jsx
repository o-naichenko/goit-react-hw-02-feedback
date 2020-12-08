// import React from "react";
import "./FeedbackOptions.css";

const FeedbackOptions = (
    {options,
    onLeaveFeedback }
) => {
    return options.map((option) => {
        return <button key={option}
            className="feedback__btn"
            type="button"
            onClick={() => onLeaveFeedback({option})}
        >{option}
        </button>
    });
    
    
    // <div>
    //     <button
    //         className="feedback__btn"
    //         type="button"
    //         onClick={() => this.addGoodFeedback()}
    //     >
    //         Good
    //       </button>
    //     <button
    //         className="feedback__btn"
    //         type="button"
    //         onClick={() => this.addNeutralFeedback()}
    //     >
    //         Neutral
    //       </button>
    //     <button
    //         className="feedback__btn"
    //         type="button"
    //         onClick={() => this.addBadFeedback()}
    //     >
    //         Bad
    //       </button>
    // </div>;
}

export default FeedbackOptions;