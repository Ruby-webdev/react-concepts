import Card from "./Card"

const DefaultPropsConcept=()=>{
    let data=[
        {
            username:"sundari",
            age:23
        },
        {
            age:20
        },
        {
            username:"Leela",
        }
    ]
    return(
        <div>
           {
            data.map((ele)=>{
                return (
                <Card user={ele}/>
            )
            })
           }
            
        </div>
    )
}


export default DefaultPropsConcept