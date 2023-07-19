import React from 'react'
import coverImg from '../assets/yafira.png'

export default function Main(props) {
	return (
		<main className={props.darkMode ? 'dark' : ''}>
			<img className='coverImage' src={coverImg} alt='avatar' />
			<div className='about'>
				<p>
					<span className='flower-accent'>✿ </span>
					<a
						className='name'
						href='https://yafira.dev/'
						target='_blank'
						rel='noopener noreferrer'
					>
						Yafira Martinez&nbsp;
					</a>
					{/* <span className='name'>Yafira Martinez </span> */}
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
						href='https://www.instagram.com/electrocute.io/'
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
						href='http://blog.electrocute.io/'
						target='_blank'
						rel='noopener noreferrer'
					>
						blogs
					</a>
					, slowly working on my digital garden called&nbsp;
					<a
						id='electrocute'
						href='http://electrocute.io/'
						target='_blank'
						rel='noopener noreferrer'
					>
						electrocute
					</a>
					, ♡ loves having <span className='tea'>tea </span> and&nbsp;
					<span className='confections'>confections </span> (like
					<span className='wagashi'> wagashi</span>), reviews vegan&nbsp;
					<a
						id='snax'
						href='http://snax.blog/'
						target='_blank'
						rel='noopener noreferrer'
					>
						snacks
					</a>{' '}
					for fun,
					<span className='nintendo'> game on her nintendo</span>
					,&nbsp;
					<span className='checker'>play chess</span>,&nbsp;
					<span className='nature'>be in nature</span>,&nbsp;
					<span className='travel'>explore new locations ✶ </span> and always
					learning new things.
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
						id='figma'
						href='https://www.figma.com/@electrocute'
						target='_blank'
						rel='noopener noreferrer'
					>
						Figma
					</a>
					,&nbsp;
					<a
						id='dribbble'
						href='https://www.dribbble.com/yafira'
						target='_blank'
						rel='noopener noreferrer'
					>
						Dribbble
					</a>
					,&nbsp;
					<a
						id='instagram'
						href='https://instagram.com/electrocutelab'
						target='_blank'
						rel='noopener noreferrer'
					>
						Instagram
					</a>
					,&nbsp;
					<a
						id='pinterest'
						href='https://www.pinterest.com/electr0cute'
						target='_blank'
						rel='noopener noreferrer'
					>
						Pinterest
					</a>
					,&nbsp;
					<a
						id='arena'
						href='https://www.are.na/yafira'
						target='_blank'
						rel='noopener noreferrer'
					>
						Are.na&nbsp;
					</a>
					& you can also reach her via&nbsp;
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
