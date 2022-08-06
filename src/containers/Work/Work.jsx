import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrapp } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Work.scss';

const Work = () => {
	const [works, setWorks] = useState([]);
	const [filterWork, setFilterWork] = useState([]);

	const [activeFilter, setActiveFilter] = useState();
	const [animatedCard, setAnimatedCard] = useState({ y: 0, opacity: 1 });

	useEffect(() => {
		const query = '*[_type == "works"]';

		client.fetch(query).then((data) => {
			setWorks(data);
			setFilterWork(data);
		});
	});

	const handlerWorkFilter = () => {};
	return (
		<div>
			<h2 className='head-text'>
				My creative <span>porfolio</span>
			</h2>

			<div className='app__work-filter'>
				{['All', 'Mobile app', 'React js', 'ux/ui'].map((item, index) => (
					<div
						key={index}
						onClick={() => handlerWorkFilter(item)}
						className={`app__work-filter-item app__flex p-text ${
							activeFilter === item ? 'item-active' : ''
						}`}
					>
						{item}
					</div>
				))}
			</div>
			<motion.div
				animate={animatedCard}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className='app__work-portfolio'
			>
				{filterWork.map((work, index) => (
					<div className='app__work-item app__flex ' key={index}>
						<div className='app__work-img app__flex'>
							<img src={urlFor(work.imgUrl)} alt={work.name} />

							<motion.div
								whileHover={{ opacity: [0, 1] }}
								transition={{
									duration: 0.25,
									ease: 'easeInOut',
									staggerChildren: 0.5,
								}}
								className='app__work-hover app__flex'
							>
								<a href={work.projectLink} target='_blank' rel='noreferrer'>
									<motion.div
										whileHover={{ scale: [0, 1] }}
										transition={{
											duration: 0.25,
										}}
										className='app__flex'
									>
										<AiFillEye />
									</motion.div>
								</a>
								<a href={work.codeLink} target='_blank' rel='noreferrer'>
									<motion.div
										whileHover={{ scale: [0, 1] }}
										transition={{
											duration: 0.25,
										}}
										className='app__flex'
									>
										<AiFillGithub />
									</motion.div>
								</a>
							</motion.div>
						</div>

						<div className='app__work-content app__flex'>
							<h4 className='bold-text'>{work.title}</h4>
							<p className='p-text' style={{ marginTop: 10 }}>
								{work.description}
							</p>

							<div className='app__work-tag app__flex'>
								<p className='p-text'>{work.tags[0]}</p>
							</div>
						</div>
					</div>
				))}
			</motion.div>
		</div>
	);
};

export default AppWrapp(Work, 'work');
