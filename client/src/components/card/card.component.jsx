import React from 'react';
import SolidButton from '../customButton/solidButton.component';
import './card.styles.scss';

export default function CustomCard({ title, imgLink, link }) {
	return (
		<div id='card'>
			<div class='card-inner'>
				<div class='card-front'>
					<img src={imgLink} alt='Female' />
				</div>
				<div class='card-back'>
					<h3>{title}</h3>
					<SolidButton title='Read More...' link={link} />
				</div>
			</div>
		</div>
	);
}
