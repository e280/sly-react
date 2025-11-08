
import {createRoot} from "react-dom/client"
import {CounterSly} from "./counter-sly.js"
import {reactify} from "../fns/reactify.js"

const CounterReact = reactify(CounterSly)

export function renderReact(container: Element) {
	createRoot(container).render(
		<CounterReact props={[1]}>
			<p>hello world</p>
		</CounterReact>
	)
}

