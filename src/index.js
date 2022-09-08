//react
import * as ReactDOM from "react-dom/client"

//components
import App from "./components/App"

const tagname = "wl-fb-popup-2"

class WLFBPopUp2 extends HTMLElement {
    static get observedAttributes() {
        return []
    }

    changeAttributes(name, previousValue, newValue) {
        switch(name) {
            default: return
        }
    }

    render() {
        ReactDOM.createRoot(this).render(<App />)
    }

    connectedCallback() {
        this.render()
    }
}

if(!window.customElements.get(tagname)) {
    window.customElements.define(tagname, WLFBPopUp2)
}