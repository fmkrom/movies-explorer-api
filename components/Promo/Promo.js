import '../Promo/Promo.css';
import NavTab from '../NavTab/NavTab';
import ContentBlockPromo from '../ContentBlockPromo/ContentBlockPromo';

function Promo(){
return (
        <ContentBlockPromo>
          <div className="promo">
              <div className='promo__main'>
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки</h1>
                <NavTab />
              </div>
          </div>
        </ContentBlockPromo>
      )
};

export default Promo;
