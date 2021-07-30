import { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

let tasks = [
  { id: 1, content: "podlać rośliny", done: false },
  { id: 2, content: "kupić warzywa na bazarze", done: true },
  { id: 3, content: "kupić prezent na urodziny siostry koleżanki męża z pracy", done: true },
  { id: 4, content: "iść na jogę", done: false },
];

function App() {

  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  return (
    <Container>

      <Header
        title="Lista zadań" />

      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} hideDone={hideDone} />}
        extraHeaderContent={
          < Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
          />
        }
      />

    </Container>
  );
};

export default App;
