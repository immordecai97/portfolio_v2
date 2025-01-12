import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const routeTitle = {
	"/": "Home",
	"/about": "About",
	"/projects": "Projects",
	"/contact": "Contact",
}

export default function usePageTitle() {
	const location = useLocation();
	useEffect(() => {
		const title = routeTitle[location.pathname] || "404";
		document.title = `${title} | Carlos Marquina portfolio`;
	}, [location.pathname]);
}

// OJO: Esto está por verse al momento de establecer un router con rutas dinámicas