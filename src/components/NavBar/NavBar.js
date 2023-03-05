import { NavLink } from 'react-router-dom'
import ButtonsDarkMode from '../ButtonsDarkMode/ButtonsDarkMode'
import './style.css'

const NavBar = () => {
	const activeLink = 'nav-list__link nav-list__link--active'
	const normalLink = 'nav-list__link'

	return (
		<header>
			<nav className='nav'>
				<div className='container'>
					<div className='nav-row'>
						<NavLink to='/' className='logo'>
							<p>
								<strong>Freelancer</strong> portfolio
							</p>
						</NavLink>

						<ButtonsDarkMode />

						<ul className='nav-list'>
							<li className='nav-list__item'>
								<NavLink
									to='/'
									className={({ isActive }) =>
										isActive ? activeLink : normalLink
									}
								>
									Home
								</NavLink>
							</li>

							<li className='nav-list__item'>
								<NavLink
									to='/projects'
									className={({ isActive }) =>
										isActive ? activeLink : normalLink
									}
								>
									Projects
								</NavLink>
							</li>
							<li className='nav-list__item'>
								<NavLink
									to='/contacts'
									className={({ isActive }) =>
										isActive ? activeLink : normalLink
									}
								>
									Contacts
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default NavBar
