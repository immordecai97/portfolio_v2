export function MiniTag({ text, as: Component = "a" }) {
	const classesToAnchor = Component === "a" ? "hover:cursor-pointer" : "";
	return (
		<Component className={`bg-primary text-white text-xs px-2 py-1 rounded ${classesToAnchor}`}>
			{text}
		</Component>
	);
}

export function MiniTagWrapper({ children, as: Component = "div" }) {
	return (
		<Component className="flex flex-wrap gap-2">
			{children}
		</Component>
	)
}