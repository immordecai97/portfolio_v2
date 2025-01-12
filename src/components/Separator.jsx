export function Separator({ as: Component = "div", text = "Text to display", className }) {
	return (
		<Component className={`separator-text my-6 ${className}`}>
			<span>
				{text}
			</span>
		</Component>
	)
}