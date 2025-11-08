
<div align="center"><img alt="" width="256" src="./assets/favicon.png"/></div>

# 🦝 sly-react
> *sly adapters for react apps*

convert [sly views](https://github.com/e280/sly#readme) into [react components](https://github.com/facebook/react#readme).

compatible with react 18 and 19.

## go go go!

1. **install `@e280/sly-react`**
    ```sh
    npm i @e280/sly-react @e280/sly react react-dom
    ```
1. **let's assume you've got a sly view like this**
    ```ts
    import {html} from "lit"
    import {view} from "@e280/sly"

    const CounterSly = view(use => (start: number) => {
	    const $count = use.signal(start)
	    return html`
	      <slot></slot>
		    <button @click="${() => $count.value++}">
			    ${$count.value}
		    </button>
	    `
    })
    ```
1. **convert your sly view into a react component**
    ```ts
    import {reactify} from "@e280/sly-react"
    import {CounterSly} from "./counter-sly.js"

    const CounterReact = reactify(CounterSly)
    ```
1. **render your sly view in your react component**
    ```ts
    const MyReactComponent = () => (
      <CounterReact props={[1]}>
        <p>hello world</p>
      </CounterReact>
    )
    ```
    - sly props are passed as an array
    - children can be slotted in



<br/><br/>
<a id="e280"></a>

## 🧑‍💻🦝 sly is by e280
reward us with github stars  
build with us at https://e280.org/ but only if you're cool  



<br/><br/>

