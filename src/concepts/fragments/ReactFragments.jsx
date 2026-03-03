import { Fragment } from "react"

const ReactFragments=()=>{

    let arr=['sundari','sheela','leela','maala']
    return(
        // <div id="fragments">fragments</div>
        <>
        {/* <ul>
            {
                arr.map((ele)=>{
                    return(
                        <>
                        <li>{ele}</li>
                        <a href="">{ele}</a>
                        </>
                    )
                })
            }
        </ul> */}

        <Fragment>
            <h1>hii</h1>
        </Fragment>
        </>
    )
}


export default ReactFragments





























6