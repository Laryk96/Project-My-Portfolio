import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar.js'

const MainLayout = () => {
	return (
		<>
			<NavBar />
			<Outlet />
			<Footer />
		</>
	)
}

export default MainLayout
