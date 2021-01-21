import '../App.css';
const RightYear = (props) => {
    return (
        <li className="timeline-inverted">
        <div className="timeline-image"><img className="rounded-circle img-fluid" src={props.year.image} alt="yearphoto" /></div>
        <div className="timeline-panel">
            <div className="timeline-heading">
                <h4>{props.year.year}</h4>
                <h4 className="subheading">{props.year.title}</h4>
            </div>
            <div className="timeline-body"><p className="text-muted">{props.year.description}</p></div>
        </div>
        </li>
        );
};

export default RightYear;

