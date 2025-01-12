export function Footer() {
	return (
		<footer className="bg-neutral-800 text-white text-xs bg-secondary min-h-10 border-t flex flex-col items-center justify-center gap-4 py-8 mt-8">
			<p>
				&copy; 2024 All rights reserved | Carlos Marquina
			</p>

			<ul className="flex items-center justify-center gap-2">
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

			<p className="font-bold text-xl">Cxrloss</p>
		</footer>
	)
}