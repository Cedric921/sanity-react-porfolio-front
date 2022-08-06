import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { urlFor, client } from '../../client';

import { AppWrapp } from '../../wrapper';

import './About.scss';

const About = () => {
	const [abouts, setAbouts] = useState();

	useEffect(() => {
		const query = '*[_type == "abouts"]';

		client
			.fetch(query)
			.then((data) => {
				setAbouts(data);
			})
			.catch((err) => console.log('fail to fetch', err));
	}, []);
	return (
		<>
			<h2 className='head-text'>
				I know that <span>Goood design</span>
				<br />
				means <span>Good Business</span>
			</h2>

			<div className='app__profiles'>
				{abouts &&
					abouts.map((about, index) => (
						<motion.div
							whileInView={{ opacity: 1 }}
							whileHover={{ scale: 1.1 }}
							transition={{ duration: 0.5, type: 'tween' }}
							className='app__profile-item'
							key={about.name + index}
						>
							<img src={urlFor(about.imageUrl).toString()} alt={about.title} />
							<h2 className='bold-text' style={{ marginTop: 20 }}>
								{about.name}
							</h2>
							<p className='p-text' style={{ marginTop: 10 }}>
								{about.description}
							</p>
						</motion.div>
					))}
			</div>
		</>
	);
};

export default AppWrapp(About, 'about');
