
import "@/css/InfinitySlider.scss";
import CarlosMarquina from "@/assets/img/CarlosMarquina.jpg";
import { useEffect, useRef, useState } from "react";

export function InfiniteSlider({ images = ["https://placehold.co/400", CarlosMarquina, "https://placehold.co/200", CarlosMarquina, "https://placehold.co/100", CarlosMarquina, "https://placehold.co/60", CarlosMarquina, "https://placehold.co/10", CarlosMarquina,], size = "200px", gap = "16px", velocity = "10s" }) {
	const sliderRef = useRef(null);
	const [width, setWidth] = useState(null);
	useEffect(() => {
		console.log(sliderRef.current);
		if (sliderRef.current) {
			console.log(sliderRef.current.offsetWidth);
			sliderRef.current.addEventeListener("resize", () => {
				// setWidth(sliderRef.current.offsetWidth);
			});
		}

	}, []);


	const quantity = images.length;
	return (
		<div
			ref={sliderRef}
			className="slider"
			style={{
				"--perreo": "#000000",
				"--size": size,
				"--gap": gap,
				"--velocity": velocity,
				"--quantity": quantity,
				"--width": `${width}px`,
			}}>
			<div className="slider-list">
				{images.map((src, index) => (
					<div
						key={`slider-item-${index}`}
						className="slider-item"
						style={{
							"--position": index + 1,
						}}>
						<img className="slider-img" src={src} alt={`slider-image-${index}`} />
					</div>
				))}
			</div>
		</div>
	);
}