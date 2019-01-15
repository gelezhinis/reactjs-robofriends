import React from 'react';

const Card = ({ name, email, id }) => {
	return (
		<div className='f10 dib tc bg-light-purple pa3 dib ma2 br3 grow shadow-5'>
			<img alt="roboImg" src={`https://robohash.org/${id}?150x150`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;
