import React from 'react';
import './card.css'
const Card = (props) =>
{
	return (
			<div className='tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>
				<img src={`https://robohash.org/${props.id}`} alt='Robot' />
				<div>
					<h2>{props.name}</h2>
					<p>{props.email}</p>
				</div>
			</div>	
		);
}
export default Card;