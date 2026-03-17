import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"
import ContextApi, { GlobalContextApi } from "./concepts/crudoperation/context/ContextApi";
import { Provider } from "react-redux";
import { store } from "./concepts/reduxtoolkitconcept/app/store";
// import { stores } from "./concepts/toolkitredux/apps/store";
// import { store } from "./concepts/ReducerToolkit3/app/store";

createRoot(document.getElementById("root")).render(
    // <ContextApi>

    <Provider store={store}>
        <ContextApi>
        <App/>
        </ContextApi> 
    </Provider>


    // <Provider store={stores}>
    //  <ContextApi>
    //     <App/>
    // </ContextApi>
    // </Provider>


    // <Provider store={store}>
    //     <ContextApi>
    //         <App />
    //     </ContextApi>
    // </Provider>


    // </ContextApi>
)