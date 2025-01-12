import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import usePageTitle from "./hooks/usePageTitle";
import { FaPlaystation } from "react-icons/fa";
import CarlosMarquina from '@/assets/img/CarlosMarquina.jpg'

function App() {

	
	return (
		<>
			<Navbar />
			<main>
				<h1 className="sr-only">Portafolio de Carlos Marquina</h1>

				<section className="bg-primary pt-10 pb-10 px-3 flex flex-col items-center justify-center gap-4 rounded-bottom z-index-100">

					<figure className="w-24 h-24 rounded-full overflow-hidden">
						<img src={CarlosMarquina} alt="Carlos Marquina" />
					</figure>

					<h2 className="h2">Carlos Marquina</h2>

					<p className="text-xl text-center font-semibold">
						Desarrollador web Full Stack
					</p>
					{/* <p className="text-xl text-center">
						Mi objetivo es crecer profesionalmente, aprender enfrentando desafíos complejos y contribuir en proyectos innovadores
					</p> */}
				</section>

				<section className="bg-secondary min-h-40 rounded-bottom z-index-0 pt-8 -mt-8 flex flex-col items-center justify-center px-3">
						<ul className="flex-1 w-full flex items-center justify-around md:justify-center md:gap-10">
							<li className="font-bold text-xl">Udemy</li>
							<li className="font-bold text-xl">Platzi</li>
							<li className="font-bold text-xl">Da Vinci</li>
						</ul>
				</section>

				<section className="bg-primary min-h-64 -z-index-100 py-8 -mt-8 flex flex-col items-center justify-center px-3">
						<div className="flex-1 py-4">
							<p className="text-xl text-center font-semibold">
								Collaborate with brands and agencies to create impactful digital products
							</p>
							<div className="separator-text">
								<span>Services</span>
							</div>
							<ul className="flex flex-col items-center justify-around gap-6">
								<li className="flex flex-col gap-2 border border-black border-opacity-20 p-4 rounded-lg">
									<div><FaPlaystation className="text-3xl" /></div>
									<p className="font-semibold">Web Development</p>
									<p className="text-sm">
										Building fast, responsive and accessible websites and web applications
									</p>
								</li>
								<li className="flex flex-col gap-2 border border-black border-opacity-20 p-4 rounded-lg">
									<div><FaPlaystation className="text-3xl" /></div>
									<p className="font-semibold">Web Development</p>
									<p className="text-sm">
										Building fast, responsive and accessible websites and web applications
									</p>
								</li>
								<li className="flex flex-col gap-2 border border-black border-opacity-20 p-4 rounded-lg">
									<div><FaPlaystation className="text-3xl" /></div>
									<p className="font-semibold">Web Development</p>
									<p className="text-sm">
										Building fast, responsive and accessible websites and web applications
									</p>
								</li>
								<li className="flex flex-col gap-2 border border-black border-opacity-20 p-4 rounded-lg">
									<div><FaPlaystation className="text-3xl" /></div>
									<p className="font-semibold">Web Development</p>
									<p className="text-sm">
										Building fast, responsive and accessible websites and web applications
									</p>
								</li>
							</ul>
						</div>
				</section>
				<section className="bg-secondary rounded-top min-h-64 z-index-0 pt-4 -mt-8 flex flex-col items-center justify-center gap-4">
						<figure className="w-24 h-24 rounded-full overflow-hidden">
							<img src={CarlosMarquina} alt="Carlos Marquina" />
						</figure>

						<p className="font-bold text-2xl text-center">Tell me about your next project</p>
				</section>
			</main>

			<Footer />
		</>
	)
}

export default App
