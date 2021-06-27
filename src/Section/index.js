import "./style.css";

const Section = (props) => (
    <section className="section">
        <h2 className="section__header">{props.title}
            {props.extraHeaderContent}
        </h2>
        <div className="section__body">
            {props.body}
        </div>
    </section>
);

export default Section;