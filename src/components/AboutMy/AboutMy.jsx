import './AboutMy.css'

const AboutMy = () => {
	return (
		<section className='aboutMy'>
			<div className='aboutMy__wrapper'>
				<h1 className='aboutMy__title'>
					<strong>
						Hi, my name is <em>Lary</em>
					</strong>
					<br />a frontend developer
				</h1>
				<div className='aboutMy__text'>
					<p>with passion for learning and creating.</p>
				</div>
				<a href='#!' className='btn'>
					Download CV
				</a>
			</div>
		</section>
	)
}

export default AboutMy
