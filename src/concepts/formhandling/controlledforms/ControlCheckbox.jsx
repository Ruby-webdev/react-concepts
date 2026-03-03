// import React, { useState } from 'react'

// const ControlCheckbox = () => {

//     const[formData, setFormData] =useState({
//         terms:false 
//     })

//     const handleChange =(e)=>{
//         const{name,type,value,checked} = e.target
//         setFormData({...formData, [name] : type ==="checkbox" ? checked : value})

//     }

//     const handleForm=(e)=>{
//         e.preventDefault()
//         console.log(formData);

//         setFormData({
//             terms:false
//         })

//     }
//   return (
//     <div>
//         <h1>ControlCheckbox</h1>
//         <form onSubmit={handleForm}>
//             <input type="checkbox" name='terms' checked= {formData.terms} onChange={handleChange} />
//             <button>submit</button>
//         </form>
//     </div>
//   )
// }

// export default ControlCheckbox





// HANDLLING MULTIPLE CHECKBOXES

import React, { useState } from 'react'

const ControlCheckbox = () => {

    const [formData, setFormData] = useState({
        skills: []
    })
    // const[skills,setSkills] = useState([])

    const handleChangeData = (e) => {
        const { value, checked } = e.target
        // console.log(value, checked);

        if (checked) {
            setFormData({ ...formData, skills: [...formData.skills, value] })
        }
        else {
            setFormData({ ...formData, skills: formData.skills.filter((ele) => ele !== value) })
        }
    }

    const handleForm = (e) => {
        e.preventDefault()
        console.log(formData.skills);
            setFormData({
                skills:[]
            })

        // setSkills([])
        

    }
    return (
        <div>
            <h1>ControlCheckbox</h1>

            <form onSubmit={handleForm}>
                <h2>Select Skills</h2>

                <input type="checkbox" id='java' value="java" checked={formData.skills.includes("java")} onChange={handleChangeData} />
                <label htmlFor="java">JAVA</label>
                <br />
                <input type="checkbox" id='python' value="python" checked={formData.skills.includes("python")} onChange={handleChangeData} />
                <label htmlFor="python">PYTHON</label>
                <br />
                <input type="checkbox" id='react' value="React" checked={formData.skills.includes("React")} onChange={handleChangeData} />
                <label htmlFor="react">React JS</label>
                <br />
                <input type="checkbox" id='php' value="php" checked={formData.skills.includes("php")} onChange={handleChangeData} />
                <label htmlFor="php">PHP</label>

                <br /><br />

                <button>Submit</button>

                {/* <h3>{skills.toString}</h3> */}
                <h4>{formData.skills.join(" , ")}</h4>
            </form>
        </div>
    )
}

export default ControlCheckbox