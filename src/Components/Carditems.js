import React from 'react'
import { Link } from 'react-router-dom'

function Carditems(props) {
  return (
    <>
        <li className='cards__item'>
            <Link className='cards__item__link' to={props.path}>
            <figure className='card__item__pic-wrap' data-category={props.label}>
            <img src={props.src} alt='Portfolio Photos' className='card__item__img' />
            </figure>
            <div className='cards__item__info'>
                <h5 className='cards__item__text'>{props.text}</h5>
            </div>
            </Link>
        </li>
    </>
  );
}

export default Carditems;
