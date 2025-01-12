export function TitleHeader({ title, subitle }) {
	return (
		<>
			<h2 className="text-4xl md:text-6xl font-bold uppercase tracking-widest mx-4 mt-8 mb-2 max-w-64">
				{title}
			</h2>
			<h3 className="text-xl md:text-2xl font-light uppercase tracking-widest mx-4 mb-4">
				{subitle}
			</h3>
		</>
	)
}

export function Subtitle({ children }) {
	return (
		<h2 className="text-xl md:text-3xl font-bold uppercase tracking-wide mx-4 my-4">
			{children}
		</h2>
	)
}