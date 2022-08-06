import React from 'react';

import './Header.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';

import { AppWrapp} from '../../wrapper'

const Header = () => {
	const scaleVariants = {
		whileInView: {
			scale: [0, 1],
			opacity: [0, 1],
			transition: {
				duration: 1,
				ease: 'easeInOut',
			},
		},
	};
	return (
		<div id='home' className='app__header app__flex'>
			<motion.div
				whileInView={{ x: [-100, 0], opacity: [0, 1] }}
				transition={{ duration: 2 }}
				className='app__header-info'
			>
				<div className='app__header-badge'>
					<div className='badge-cmp app__flex'>
						<span>👋</span>
						<div style={{ marginLeft: 20 }}>
							<p className='p-text'>Hello, I am</p>
							<h1 className='head-text'>Cedric</h1>
							<p className="p-text">KARUNGU</p>
						</div>
					</div>
					<div className='tag-cmp app__flex'>
						<p className='p-text'>Web developer</p>
						<h1 className='p-text'>freelance</h1>
					</div>
				</div>
			</motion.div>
			<motion.div
				whileInView={{ opacity: [0, 1] }}
				transition={{ duration: 2, delayChildren: 1 }}
				className='app__header-img'
			>
				<img src={images.profile} alt='vb_profile' />
				<motion.img
					whileInView={{ scale: [0, 1] }}
					transition={{ duration: 1, ease: 'easeOut' }}
					src={images.circle}
					alt='vb_circle'
					className='overlay__circle'
				></motion.img>
			</motion.div>
			<motion.div
				variants={scaleVariants}
				whileInView={scaleVariants.whileInView}
				className='app__header-circles'
			>
				{[images.flutter, images.redux, images.sass].map((circle, index) => (
					<div className='circle-cmp app__flex' key={`circle-${index}`}>
						<img src={circle} alt={circle} />
					</div>
				))}
			</motion.div>
		</div>
	);
};

export default AppWrapp(Header, 'home');
