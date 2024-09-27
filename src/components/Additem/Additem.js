import React, { useState,useEffect } from 'react'
import * as yup from "yup"

export default function Additem(props) {
    // const [id, setID] = useState(``)
    const [rollNo, setRollNo] = useState(``)
    const [name, setName] = useState(``)
    const [email, setEmail] = useState(``)
    const [classname, setClass] = useState(``)

useEffect(()=>{
    if(props.currentStudent){
        setRollNo(props.currentStudent?.rollNo)
        setName(props.currentStudent?.name)
        setEmail(props.currentStudent?.email)
        setClass(props.currentStudent?.classname)
    }
},[props.currentStudent])
    const schema = yup.object().shape({
        name:yup.string().required(),
        rollNo:yup.number().required(),
        email:yup.string().email().required(),
        classname:yup.string().required()
    })
    

    const onClickHandler =async () => {
        let data ={
            // id:id,
            rollNo:rollNo,
            name:name,
            email:email,
            classname:classname
        }
        try{
          let result=await  schema.validate(data)
          props.currentStudent ? props.onUpdateHandler(data,props.currentStudent.id):
            props.onAddHandler(data)
            setRollNo(``)
            setName(``)
            setEmail(``)
            setClass(``)
        }catch(error){
console.log(`errors`,error);

        }
       

    }
    return (
        <div class="form-container">
            {/* <input onChange={(e) => setID(e.target.value)} type='text' placeholder='EnterID:' /> */}
           {/* <h6>Enter rollno:</h6>  */}
           <input value={rollNo} onChange={(e) => setRollNo(e.target.value)} type="text" id="rollNo" placeholder="Enter Roll No" />
           {/* <h6>Enter name::</h6>  */}
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" placeholder="Enter Name" />
            {/* <h6>Enter email:</h6>  */}
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" placeholder="Enter Email" />
            {/* <h6>Enter class:</h6>  */}
            <input value={classname} onChange={(e) => setClass(e.target.value)} type="text" id="class" placeholder="Enter Class" />
           
            <button onClick={onClickHandler} id="addBtn">Add</button>
        </div>
    )
}
