import "./style.css";

const Buttons = (props) => (
    props.tasks.length > 0 && (
        <div className="buttons">
            <button className="buttons__button">
                {props.hideDoneTask ? "Pokaż" : "Ukryj"} ukończone
            </button>

            <button className="buttons__button" disabled={props.tasks.every(task => task.done)}>
                Ukończ wszystkie
            </button>
        </div>
    )
);

export default Buttons;