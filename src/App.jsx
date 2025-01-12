import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Section } from "@/components/Section";
import { Avatar } from "@/components/Avatar";
import { Separator } from "@/components/Separator";
import { FaPlaystation } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { MiniTag, MiniTagWrapper } from "./components/MiniTags";
import CarlosMarquina from "@/assets/img/CarlosMarquina.jpg";
import { InfiniteSlider } from "@/components/InfinitySlider";
import { Subtitle, TitleHeader } from "@/components/Titles";
import { Button } from "./components/Button";
import { MdLocationPin } from "react-icons/md";
import { IoMdAnalytics } from "react-icons/io";
import CertificateSwiper from "@/components/CertificateSwiper";
import { Projects } from "./components/Projects";
import { Skills, SkillsReverse } from "./components/Skills";

function App() {
	const images = [CarlosMarquina, CarlosMarquina, CarlosMarquina, CarlosMarquina];

	return (
		<>
			<Navbar />
			<main className="container mx-auto px-1 py-8 flex flex-col gap-8 md:py-12 md:px-4 md:gap-12">
				<section className="sm:flex sm:items-center sm:mx-4">
					<div className="sm:w-1/2">
						<TitleHeader
							title="Carlos Marquina"
							subitle="Web developer" />
						<Button text="Contact me" />
					</div>
					<div className="hidden sm:flex sm:w-1/2 justify-center items-center">
						<Avatar src={CarlosMarquina} alt="Carlos Marquina" />
					</div>
				</section>

				<section>
					<Subtitle>Education</Subtitle>
					<ul className="flex flex-col space-y-4">
						<li className="p-3 border border-neutral-300 rounded sm:flex sm:justify-between">
							<div className="flex flex-col max-w-sm sm:col-span-2">
								<div className="flex flex-wrap items-center gap-x-4">
									<h3 className="font-semibold uppercase">Web Development</h3>
									{/* <ul className="flex gap-2">
										<li className="bg-neutral-800 text-white text-sm py-1 px-2 rounded flex gap-1 items-center"><MdLocationPin />Remoto</li>
										<li className="bg-neutral-800 text-white text-sm py-1 px-2 rounded flex gap-1 items-center"><MdLocationPin />Optional</li>
									</ul> */}
								</div>
								<p>
									Web design and development career
								</p>
								<ul className="flex gap-2">
									<li className="bg-neutral-800 text-white text-sm py-1 px-2 rounded flex gap-1 items-center"><MdLocationPin />Argentina</li>
									<time className="bg-neutral-800 text-white text-sm py-1 px-2 rounded flex gap-1 items-center sm:hidden">2022 - 2025</time>
								</ul>
							</div>
							<time className="bg-neutral-800 text-white text-sm py-1 px-2 rounded items-center mt-2 hidden sm:flex sm:mt-0 sm:self-start">2022 - 2025</time>
						</li>



						<li className="p-3 border border-neutral-300 rounded sm:flex sm:justify-between">
							<div className="flex flex-col max-w-sm sm:col-span-2">
								<div className="flex flex-wrap items-center gap-x-4">
									<h3 className="font-semibold uppercase">Platzi</h3>
									{/* <ul className="flex gap-2">
										<li className="bg-neutral-800 text-white text-sm py-1 px-2 rounded flex gap-1 items-center"><MdLocationPin />Remoto</li>
										<li className="bg-neutral-800 text-white text-sm py-1 px-2 rounded flex gap-1 items-center"><MdLocationPin />Optional</li>
									</ul> */}
								</div>
								<p>
									Online professional learning platform.
								</p>
								<ul className="flex gap-2">
									<li className="bg-neutral-800 text-white text-sm py-1 px-2 rounded flex gap-1 items-center"><MdLocationPin />Colombia</li>
									<time className="bg-neutral-800 text-white text-sm py-1 px-2 rounded flex gap-1 items-center sm:hidden">2022 - 2025</time>
								</ul>
							</div>
							<time className="bg-neutral-800 text-white text-sm py-1 px-2 rounded items-center mt-2 hidden sm:flex sm:mt-0 sm:self-start">2023 - Currently</time>
						</li>
					</ul>
				</section>

				<section>
					<Subtitle>Technical skills</Subtitle>
					<div className="flex flex-col gap-12">
						<Skills />
						<SkillsReverse />
					</div>

					{/* <div>
						<MiniTagWrapper>
							<MiniTag text="HTML" />
							<MiniTag text="CSS" />
							<MiniTag text="JavaScript" />
							<MiniTag text="React" />
							<MiniTag text="Node" />
							<MiniTag text="Express" />
							<MiniTag text="MongoDB" />
							<MiniTag text="Git" />
						</MiniTagWrapper>
					</div> */}
				</section>
				<section>

				</section>
				<section>
					<Subtitle>Certifications</Subtitle>
					<CertificateSwiper />
				</section>

				<section>
					<Subtitle>Projects</Subtitle>
					<Projects />
				</section>

			</main>
			<Footer />
		</>
	)
}

export default App
