import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

let tasks = [
  { id: 1, content: "podlać rośliny", done: false },
  { id: 2, content: "zrobić zakupy na bazarze", done: true },
  { id: 3, content: "kupić prezent na urodziny siostry koleżanki męża z pracy", done: true },
  { id: 4, content: "iść na jogę", done: false },
];

const hideDone = false;

function App() {
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
        extraHeaderContent={< Buttons tasks={tasks} hideDone={hideDone} />}
      />

    </Container>
  );
};

export default App;
