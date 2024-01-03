import { Fragment } from "react";
import Header from "./componente/dumb/Header";
import Main from "./componente/dumb/Main";
import "./estilo/App.css";

function App(): JSX.Element {
    return (
        <Fragment>
            <Header/>
            <Main/>
        </Fragment>
    )
}

export default App;
