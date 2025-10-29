
import {dom} from "@e280/sly/dom"
import {View} from "@e280/sly/view"
import {useRef, useEffect} from "react"

import {divify} from "./divify.js"
import {ReactProps} from "./types.js"

/** convert a sly view into a react function component */
export function reactify<Props extends any[]>(slyView: View<Props>) {
	return function SlyReactView({props, children}: ReactProps<Props>) {
		const ref = useRef<HTMLDivElement | null>(null)

		useEffect(() => {
			const el = ref.current
			if (!el) throw new Error("ref not ready")
			dom.render(
				el,
				slyView
					.props(...props)
					.children(children ? divify(children) : null)
					.render(),
			)
			return () => void dom.render(el, null)
		})

		return <div ref={ref} style={{display: "contents"}} />
	}
}

