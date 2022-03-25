import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import './style.css'

export default function App() {
	const [darkMode, setDarkMode] = React.useState(false)

	useEffect(() => {
		document.body.style.backgroundColor = darkMode ? '#1f2022' : '#fffffb'
		document.body.style.color = darkMode ? '#fffffb' : '#1f2022'
	}, [darkMode])

	function toggleDarkMode() {
		setDarkMode((prevMode) => !prevMode)
	}

	return (
		<div className='container'>
			<Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			<Main darkMode={darkMode} />
		</div>
	)
}
