import React from 'react'
import lightIcon from '../assets/light.png'
import darkIcon from '../assets/dark.png'

export default function Navbar(props) {
	return (
		<nav className={props.darkMode ? 'dark' : ''}>
			<div className='toggler'>
				<img className='toggler--light' src={lightIcon} />
				<div className='toggler--slider' onClick={props.toggleDarkMode}>
					<div className='toggler--slider--circle'></div>
				</div>
				<img className='toggler--dark' src={darkIcon} />
			</div>
		</nav>
	)
}
