import CarlosMarquina from '@/assets/img/CarlosMarquina.jpg'
export function Avatar() {
	return (
		<figure className="w-48 h-w-48 rounded-full overflow-hidden">
			<img src={CarlosMarquina} alt="Carlos Marquina" />
		</figure>
	)
}