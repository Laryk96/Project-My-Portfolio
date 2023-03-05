import './styles/main.css'

import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Projects from './pages/Projects'
import Project from './pages/Project'
import Contacts from './pages/Contacts'

import ScrollToTop from './utils/scrollToTop'
import MainLayout from './layout/MaintLayout'

function App() {
	return (
		<div className='App'>
			<ScrollToTop />
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/project/:id' element={<Project />} />
					<Route path='/contacts' element={<Contacts />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
