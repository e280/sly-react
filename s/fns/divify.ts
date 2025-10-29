
import {createRoot} from "react-dom/client"

/** render a react node into a div and return the div */
export function divify(node: React.ReactNode) {
	const div = document.createElement("div")
	div.style.display = "contents"
	createRoot(div).render(node)
	return div
}

