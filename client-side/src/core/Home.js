import React from 'react';
import DragAndDrop from '../Components/DragAndDrop/DragAndDrop';
import Navbar from '../Components/Navbar/Navbar';

import '../styles.css';
import Base from './Base';
function Home() {
	return (
		<div>
			<Base />
			<Navbar />
			<DragAndDrop />
		</div>
	);
}

export default Home;
