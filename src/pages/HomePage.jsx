import React from 'react';
import Anouncement from '../components/Anouncement';
import Slider from '../components/Slider';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const HomePage = () => {
	return (
		<div>
			<Anouncement />
			<Navbar />
			<Slider />
			<Categories />
			<Products />
			<Newsletter />
			<Footer />
		</div>
	);
};

export default HomePage;
