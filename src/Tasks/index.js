import "./style.css";

const Tasks = (props) => (
    <ul className="list">
        {props.tasks.map(task => (
            <li key={task.id}
                className={`list__item ${(task.done && props.hideDone) ? "list__item--hidden" : ""}`}>

                <button className={`list__button list__button--toggleDone`}>
                    {task.done ? "✔" : ""}
                </button>

                <span className={`list__content ${task.done ? " list__content--done" : ""}`}>
                    {task.content}
                </span>

                <button onClick={() => props.removeTask(task.id)} className="list__button list__button--remove">
                    🗑
                </button>
            </li>
        ))}
    </ul >
);

export default Tasks;