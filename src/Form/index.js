import { useState } from "react";
import "./style.css";

const Form = (props) => {

    const [newTaskContent, setnewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim() === "") {
            return;
        } else {
            props.addNewTask(newTaskContent.trim());
            setnewTaskContent("");
        }

    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                onChange={(event) => setnewTaskContent(event.target.value)}
                className="form__input" placeholder="Co jest do zrobienia?"
            />
            <button className="form__button">Dodaj zadanie</button>
        </form >
    )
};

export default Form;