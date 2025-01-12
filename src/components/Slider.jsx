import "@/css/slider.scss";
export function InfiniteSlider({ images, width = "100%", height = "100%", reverse = true, velocity = "10s" }) {
	const quantity = images.length;
	return (
		<>
			<div className="slider"
				style={{
					"--width": width,
					"--height": height,
					"--quantity": `${quantity}`,
					"--velocity": velocity
				}}
				data-reverse="false">
				<div className="list">
					{
						images.map((src, index) => (
							<div className="item" style={{ "--position": `${index + 1}` }} key={`slider-item-${index}`}>
								<img src={src} alt={`slider-image-${index}`} draggable={false} />
							</div>
						))
					}
				</div>
			</div>
		</>
	);
}