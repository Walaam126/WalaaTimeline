import '../App.css';
import data from '../data';
import LeftYear from './LeftYear';
import RightYear from './RightYear';

const YearsList = () => {
  const yearslist = data.map((year) => {
    if (year.id % 2 !== 0)
      return (<LeftYear key={year.id} year={year}/>)
    else
      return (<RightYear key={year.id} year={year}/>)
  });

  return (
    <div className="container">
    <div className="text-center">
        <h2 className="section-heading text-uppercase">About</h2>
        <h3 className="section-subheading text-muted">Walaa Mohsen</h3>
    </div>
    <ul className="timeline">
        {yearslist}
       
        <li className="timeline-inverted">
            <div className="timeline-image">
                <h4>
                    Be Part
                    <br />
                    Of My
                    <br />
                    Story!
                </h4>
            </div>
        </li>
    </ul>
  </div>
  )
};

  export default YearsList;

 