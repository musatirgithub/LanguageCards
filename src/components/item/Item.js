import './Item.css';
import {useState} from 'react';

const Item = ({card}) => {
    const {name, img, options} = card;
    const [showLogo, setShowLogo] = useState(true);

    const clickHandler = ()=>{
      setShowLogo(!showLogo);
      setTimeout(()=>{
        setShowLogo(showLogo=>!showLogo)
      },5000)
    }

  return (
    <div className='card' onClick={clickHandler}>
    {showLogo ? (

    
      <div>
        <img className="card-logo" src={img} alt={name} />
        <h3 className="card-title">{name}</h3>
      </div>) : (
      <ul>
        {options.map((element, index)=>{
          return <li className='list' key={index}>{element}</li>
        })}
      </ul>
      ) }
    </div>
  )
}

export default Item;