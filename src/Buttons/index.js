import "./style.css";
import React from 'react';

const Buttons = (props) => (
    <div className="buttons">
        {props.tasks.length > 0 && (
            <React.Fragment>
                <button className="buttons__button">
                    {props.hideDoneTask ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button className="buttons__button" disabled={props.tasks.every(task => task.done)}>
                    Ukończ wszystkie
                </button>
            </React.Fragment>
        )}
    </div>
);

export default Buttons;