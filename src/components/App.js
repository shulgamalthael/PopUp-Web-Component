//react
import { useState } from "react"

//styles
import "./App.scss"

//components
import PopUp from "./PopUp/PopUp"
import ShowButton from "./ShowButton/ShowButton"

const App = () => {
    const [isShow, setIsShow] = useState(false)
    
    return isShow ? <PopUp isShow={isShow} setIsShow={setIsShow} /> : <ShowButton isShow={isShow} setIsShow={setIsShow} />
}

export default App