import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		}
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll); // los returns en un useEffect se ejecutan al desmontar el componente
	}, []);
	
	return (
		<nav className={scrolled ? 'scrolled' : ''}>
			{/* BTNS */}
			<BtnToCopy addClass={"hidden md:block"} />
			
			{/* LOGO */}
			<figure>
				{/* <img src="" alt="" /> */}
				<p className="font-bold text-xl">Cxrloss</p>
			</figure>
		
			{/* MENU BURGER */}
			<div>
			{
				isOpen && (
					<button className="btnClose" onClick={() => setIsOpen(false)}>
						<IoClose />
					</button>
				) || (
					<button className="btnOpen" onClick={() => setIsOpen(true)}>
						<IoMenu />
					</button>
				)
			}
			</div>
		
			{/* NAV LIST */}
			<div className={`menu-slide ${isOpen ? 'open': ''}`}>
				<ul className="navlist">
					<li>
						<a href="#">LinkedIn</a>
					</li>
					<li>
						<a href="#">Whatsapp</a>
					</li>
					<li>
						<a href="#">Instagram</a>
					</li>
					<li>
						<a href="#">GitHub</a>
					</li>
				</ul>
				<BtnToCopy addClass="md:hidden" />
			</div>
		</nav>
	);
}

function BtnToCopy({addClass}) {
	return (
		<div className={`flex gap-4 ${addClass}`}>
			<div className="flex items-center gap-2 outline-rounded">
				<p className="hidden md:block">carlosscripto@gmail.com</p>
				<button className="btn" >
					Copy <span className="md:hidden">email</span>
				</button>
			</div>
			<button className="btn">CV</button>
		</div>
	)
}