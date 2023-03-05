import './MyStack.css'

const MyStack = () => {
	return (
		<section className='myStack'>
			<ul className='content-list'>
				<li className='content-list__item'>
					<h2 className='title-2'>Frontend</h2>
					<p>
						JavaScript, TypeScript, ReactJS, , Redux, HTML, CSS, NPM, ,
						MaterialUI, Yarn, TailwindCSS, StyledComponents
					</p>
				</li>
				<li className='content-list__item'>
					<h2 className='title-2'>Backend</h2>
					<p>I am currently learning node.js</p>
				</li>
			</ul>
		</section>
	)
}

export default MyStack
