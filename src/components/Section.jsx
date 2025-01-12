export function Section({ children, className = "", childrenCSS = "" }) {
	return (
		<section className={`relative flex py-8 -mt-14 ${className}`}>
			<div className={`flex-1 px-1 py-6 ${childrenCSS}`}>
				{children}
			</div>
		</section>
	);
};