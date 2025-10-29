
import {html} from "lit"
import {view} from "@e280/sly"

export const CounterSly = view(use => (start: number) => {
	const $count = use.signal(start)
	return html`
		<slot></slot>
		<button @click="${() => $count.value++}">
			${$count.value}
		</button>
	`
})

