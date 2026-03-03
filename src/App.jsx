import { ToastContainer, Zoom } from "react-toastify";
// import ConditionalRendering from "./concepts/conditionalrendering/ConditionalRender";
// import Ternaryrender from "./concepts/conditionalrendering/TernaryRender";
// import FormHandling from "./concepts/formhandling/FormHandling";
// import ReactFragments from "./concepts/fragments/ReactFragments";
// import HooksHome from "./concepts/hooks/HooksHome";
// import Icons_Implement from "./concepts/icons_implementation/Icons_Implement";
// import JsxExpression from "./concepts/jsxExpression/JsxExpression";
// import ListAndKeys from "./concepts/listandkeys/ListAndKeys";
// import PropsHome from "./concepts/props/PropsHome";
// import AxiosConcept from "./concepts/axiosconcept/AxiosConcept";
import Tailwindcssconcept from "./concepts/tailwindcssconcept/Tailwindcssconcept";
import RouterLayout from "./concepts/reactrouting/RouterLayout";
import PropsDrilling from "./concepts/propsdrilling/PropsDrilling";
import ContextApiConcept from "./concepts/contextapi/ContextApiConcept";
import HOC from "./concepts/hoc/HOC";
import ReactOptimization from "./concepts/optimization/ReactOptimization";
import HooksHome from "./concepts/hooks/HooksHome";



const App = () => {
    return (
        <div id="app">
            {/* <JsxExpression/> */}
            {/* <ConditionalRendering/> */}
            {/* <Ternaryrender/> */}
            {/* <PropsHome/> */}
            {/* <Icons_Implement/> */}
            {/* <HooksHome/> */}
            {/* <ReactFragments/> */}
            {/* <ListAndKeys/> */}
            <HooksHome />
            {/* <FormHandling /> */}
            {/* <AxiosConcept/> */}
            {/* <Tailwindcssconcept/> */}
            {/* <RouterLayout/> */}
            {/* <PropsDrilling/> */}
            {/* <ContextApiConcept/> */}
            {/* <HOC/> */}
            {/* <ReactOptimization/> */}


            <ToastContainer position="top-center"
                autoClose={2000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Zoom}
            />
        </div>
    )
}

export default App