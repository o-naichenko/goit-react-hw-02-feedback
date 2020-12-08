import React from "react";
import "./Statistics.css";

const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage
}) => { 
    return <div>
            <h2>Statistics</h2>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>
            Positive feedback:{" "}
            {total > 0
                ? positivePercentage + "%"
                : null}
            </p>
        </div>;
}

export default Statistics;