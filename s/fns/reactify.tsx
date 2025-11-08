
import {useRef, useEffect} from "react"
import {NakedView, SlyView, View} from "@e280/sly/view"

import {ReactProps} from "./types.js"

/** convert a sly view into a react function component */
export function reactify<Props extends any[]>(slyView: View<Props>) {
	SlyView.register()

	return function SlyReactView({props, children}: ReactProps<Props>) {
		const divRef = useRef<HTMLDivElement | null>(null)
		const nakedRef = useRef<NakedView<Props> | null>(null)

		useEffect(() => {
			const el = divRef.current
			if (!el) throw new Error("ref not ready")
			const naked = slyView.naked(el)
			naked.render(...props)
			nakedRef.current = naked
		}, [])

		if (nakedRef.current)
			nakedRef.current.render(...props)

		return (
			<sly-view ref={divRef}>
				{children}
			</sly-view>
		)
	}
}

