import React from 'react'
import coverImg from '../assets/yafira.png'

export default function Main(props) {
	return (
		<main className={props.darkMode ? 'dark' : ''}>
			<img className='coverImage' src={coverImg} alt='avatar' />
			<div className='about'>
				<p>
					<span className='flower-accent'>✿ </span>
					<span className='name'>Yafira Martinez </span>
					is a&nbsp;
					<a
						id='portfolio'
						href='https://yafira.github.io/'
						target='_blank'
						rel='noopener noreferrer'
					>
						software engineer&nbsp;
					</a>
					with an interest in <span className='compute'>computing, </span>
					<span className='design'>design, </span>
					<span className='tech'>emerging technologies</span>, and the
					intersection of <span className='internet'>technology</span> and
					<span className='art'> art.</span>
				</p>
				<p>
					<span className='flower-accent2'>✿ </span>
					Her goal is to <span className='tools'>build tools</span> that help
					people and to improve and expand the interaction between humans and
					computers.
				</p>
				<p>
					<span className='flower-accent3'>✿ </span>
					Besides <span className='code'>code</span> and
					<span className='design2'> design ✧</span>, she likes to&nbsp;
					<a
						id='photos'
						href='https://www.instagram.com/elqtrct/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<text>take photos&nbsp;</text>
					</a>
					of sceneries and things ❀, eat and&nbsp;
					<a
						id='plantbasedcraft'
						href='https://www.instagram.com/plantbasedcraft/'
						target='_blank'
						rel='noopener noreferrer'
					>
						make&nbsp;
					</a>
					plant-based recipes,&nbsp;
					<span className='read'>
						enjoys print material such as books and zines
					</span>
					, ocassionally&nbsp;
					<a
						id='blog'
						href='https://elqtrct.wordpress.com/'
						target='_blank'
						rel='noopener noreferrer'
					>
						blogs
					</a>
					, ♡ loves having <span className='tea'>tea </span> and&nbsp;
					<span className='confections'>confections </span> (like
					<span className='wagashi'> wagashi</span>), game on her&nbsp;
					<span className='nintendo'>nintendo</span>,&nbsp;
					<span className='checker'>play chess</span>, be in&nbsp;
					<span className='nature'>nature</span>,&nbsp;
					<span className='travel'>explore new locations ✶ </span> and always
					learn new things.
				</p>
				<p>
					<span className='flower-accent4'>✿ </span>
					She ♀ is a user of ⌘&nbsp;
					<a
						id='linkedin'
						href='https://www.linkedin.com/in/yafira/'
						target='_blank'
						rel='noopener noreferrer'
					>
						LinkedIn
					</a>
					,&nbsp;
					<a
						id='github'
						href='https://github.com/Yafira'
						target='_blank'
						rel='noopener noreferrer'
					>
						GitHub
					</a>
					,&nbsp;
					<a
						id='glitch'
						href='https://glitch.com/@electrocute'
						target='_blank'
						rel='noopener noreferrer'
					>
						Glitch
					</a>
					,&nbsp;
					<a
						id='dribbble'
						href='https://www.dribbble.com/y-fi'
						target='_blank'
						rel='noopener noreferrer'
					>
						Dribbble
					</a>
					,&nbsp;
					<a
						id='instagram'
						href='https://instagram.com/elqtrct'
						target='_blank'
						rel='noopener noreferrer'
					>
						Instagram
					</a>
					,&nbsp;
					<a
						id='pinterest'
						href='https://www.pinterest.com/elqtrct'
						target='_blank'
						rel='noopener noreferrer'
					>
						Pinterest
					</a>
					&nbsp;& you can also reach her via&nbsp;
					<a
						id='email'
						href='mailto: yfr.mrtnz@gmail.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						email.
					</a>
				</p>
			</div>
		</main>
	)
}
