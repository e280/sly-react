
import {ssg, html} from "@e280/scute"

const title = "sly-react"
const description = "sly's react adapter"
const domain = "sly-react.e280.org"
const favicon = "/assets/favicon.png"

export default ssg.page(import.meta.url, async orb => ({
	title,
	js: "demo/demo.bundle.min.js",
	css: "demo/demo.css",
	favicon,
	dark: true,
	socialCard: {
		themeColor: "#95ff7b",
		title,
		description,
		siteName: "@e280/sly-react",
		image: "https://" + domain + favicon,
	},

	body: html`
		<img class=icon alt="" src="/assets/favicon.png"/>
		<h1>sly-react testing page</h1>
		<p><a href="https://github.com/e280/sly-react">github.com/e280/sly-react</a></p>
		<p class=lil>v${orb.packageVersion()}</p>

		<div class=demo></div>
	`,
}))

