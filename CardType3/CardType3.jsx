import { useState } from 'react';
import { ButtonType3 } from '../';

import "./CardType3.css";


const CardType3 = (props) => {

const [backgroundImg, setBackgroundImg] = useState(props.card.images[1].imgUrl)
const [image, setImage] = useState(props.card.images[1].value);
const RadioButton = ({ card: {imgUrl, id, name, value} }) => {
  const isChecked = (value) => image === value;
  return (
    <label htmlFor={id} className="radiobutton-label">
      <input
        className="radiobutton-input"
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={(event) => {
          setImage(event.target.value);
          setBackgroundImg(imgUrl);
        }}
        checked={isChecked(value)}
      />
      <span className="custom-radiobutton" />
    </label>
  );
};


  return (
    <div className="cardType3">
      <div className='cardType3__header' style={{ backgroundImage: `url(${backgroundImg})` }} >
        <div className="cardType3-head">
          <div className="cardType3-head_catch">хит</div>
          <ButtonType3 click={() => { console.log('clicked') }} />
        </div>
        <div className='cardType3__header-buttonContainer '>
          <div className='flex__center' >
          {props.card.images.slice(0, 3).map((card,index) => <RadioButton card={card} key={ index + card.id } />)}
          </div>
        </div>
      </div>
      <div className="cardType3-container">
        <div>
          <p className='p__carFormfactor' style={{ paddingBottom: '0.5rem' }}>Кроссовер</p>
          <p className='p__carPrice-Title' style={{ paddingBottom: '0.5rem' }}>GEELY Atlas NEW</p>
          <p className='p__carCharacteristics'>GX 2.0 8AT (231 л.с.) 4WD</p>
          <p className='p__carPrice-Title' style={{ paddingTop: '0.5rem', color: 'var(--color-accent)' }}>2 435 000 ₽ <span className='p__carPriceLineThrough'>3 800 699 ₽</span></p>
          <p className='cardType3-monthlyPayment'>от 65 255 руб/мес.</p>
        </div>
      </div>
      <a href='#' className='cardType3-btn'>
        Купить в кредит
        <p className='cardType3-monthlyPayment'>от 65 255 руб/мес.</p>
      </a>
    </div>
  )
}

export default CardType3