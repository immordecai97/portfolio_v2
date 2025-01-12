import { projects } from '@/data/resume.json';

import { Icon } from "@iconify/react";
export function Projects() {
	return (
		<ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
			{
				projects.map(({ name, description, url, technologies }, index) => (
					<li key={index} className="p-3 border border-neutral-300 rounded max-w-96 flex flex-col justify-around">
						<div>
							<h3 className="font-semibold uppercase">{name}</h3>
							<p className='text-sm'>{description}</p>
						</div>
						<ul className="flex flex-wrap gap-1">
							{technologies.map((technology, index) => (
								<li key={index} className="bg-neutral-800 text-white text-xs py-1 px-2 rounded flex gap-1 items-center">{technology}</li>
							))}
						</ul>
					</li>
				))
			}
		</ul>
	)
}







