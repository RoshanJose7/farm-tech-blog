import React from 'react';
import SolidButton from '../../components/customButton/solidButton.component';
import TransparentButton from '../../components/customButton/transparentButton.component';
import CustomCard from '../../components/card/card.component';
import veggies from '../../assets/veggies.jpg';
import shoppingCart from '../../assets/shopping-cart.png';
import farming from '../../assets/farming.jpg';
import './homePage.styles.scss';

function HomePage() {
	return (
		<div>
			<div id='home'>
				<div id='home-content' />
				<h2>"JAI JAWAN JAI KISSAN"</h2>
				<h1>WELCOME to Agri-Tech</h1>
				<p>
					Farmer are the backbone of our country,our work is to give support to farmer in this technology era.
				</p>
				<div className='button-holder'>
					<TransparentButton title='Services' link='#' isTransparent={true} />
					<SolidButton title='About Us' link='/about' isTransparent={false} />
				</div>
			</div>
			<div id='announcements'>
				<div id='announcement-cards'>
					<CustomCard title="Fruits and Vegetable's updated prices of APMC" imgLink={veggies} />
					<CustomCard title='Sell yours fresh vegetables to us' imgLink={shoppingCart} />
					<CustomCard
						title='
Get money by giving your dryland for rent / Lease	
'
						imgLink={farming}
					/>
				</div>
				<div id='announcement-content'>
					<h3>Amazing Things for You</h3>
					<div className='para'>
						<p>
							This website is to give benefits and good services to the farmers.Here you can get the
							updated rate of the vegetable and fruits and also he can sell his vegetables and fruits to
							us.
						</p>
						<p>
							If in case the farmers have a land which is not sutiable for farming then please find your
							solution here.
						</p>
						<div>
							<TransparentButton title='Our History' link='#' />
						</div>
					</div>
				</div>
			</div>
			<div id='home-contact'>
				<div id='home-contact-content' />
				<h1>CONTACT US</h1>
				<p>
					<p>Contact us on +91-7338095085</p>
					<p>mail us on agritech@gmail.com</p>
				</p>
				<div className='button-holder'>
					<TransparentButton title='Contact' link='#' isTransparent={true} />
				</div>
			</div>
		</div>
	);
}

export default HomePage;