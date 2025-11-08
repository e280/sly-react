
import React from "react"

declare module "react" {
	namespace JSX {
		interface IntrinsicElements {
			"sly-view": React.DetailedHTMLProps<
				React.HTMLAttributes<HTMLElement>,
				HTMLElement
			>
		}
	}
}

