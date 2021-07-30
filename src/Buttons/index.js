import "./style.css";
import React from 'react';

const Buttons = (props) => (
    <div className="buttons">
        {props.tasks.length > 0 && (
            <React.Fragment>
                <button onClick={props.toggleHideDone} className="buttons__button">
                    {props.hideDoneTask ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button
                    disabled={props.tasks.every(task => task.done)}
                    onClick={props.setAllDone}
                    className="buttons__button"
                >
                    Ukończ wszystkie
                </button>
            </React.Fragment>
        )}
    </div>
);

export default Buttons;