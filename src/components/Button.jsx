export function Button({ text }) {
	return (
		<button className="transition-all w-full font-semibold uppercase rounded py-2 px-4 border border-neutral-800 hover:bg-neutral-800 hover:text-white">
			{text}
		</button>
	)
}