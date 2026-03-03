import { Fragment } from "react"

const ListAndKeys=()=>{
        let arr=['sundari','sheela','leela','maala','leelabati']

    return(
        <div>
            {
                arr.map((ele,index)=>{
                    return(
                       <Fragment key={index}>
                             <h1>{ele}</h1>
                        </Fragment>
                    )
                })
            }
        </div>
    )
}


export default ListAndKeys