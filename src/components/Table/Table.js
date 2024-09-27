
import { useState } from "react"
// import data from "../../constant/data"
import Tableitem from "../Tableitem";
import Additem from "../Additem/Additem";


export default function Table() {


    // console.log("data", data);
    const [data, setData] = useState([
        {
            id: 1,
            rollNo: 1010,
            name: "Ali",
            email: "ali@gmail.com",
            classname: "BSCS",
        },
        {
            id: 2,
            rollNo: 1020,
            name: "Umer",
            email: "umer@gmail.com",
            classname: "BSCS",
        }

    ])

    const [currentStudent, setCurrentStudent] = useState({})


    const onClickHandler = (id) => {
        console.log(`onclick in p`, id)
        let newdata = data.filter(item => item.id !== id);
        setData(newdata)
    }

    const onAddHandler = (add) => {
        // setData([...data, add])
        setData([...data, {
            id: data.length + 1,
            rollNo: add.rollNo,
            name: add.name,
            email: add.email,
            classname: add.classname
        }])
    }


    const onClickUpdatehandler = (item) => {
        console.log(`update`, item);
        setCurrentStudent(item)

    }
    const onUpdateHandler = (student, id) => {
        let newData = data.map((item) => {
            if (item.id === id) {
                return{
                ...item,  rollNo: student.rollNo, email: student.email, name: student.name, classname: student.classname }
            }
            return item

        })
        setData(newData)
        setCurrentStudent(null)
    }

    return (
        <div class="container">
        <h1>Student Information System</h1>
            <Additem currentStudent={currentStudent} onClickUpdatehandler={onClickUpdatehandler} onUpdateHandler={onUpdateHandler} onAddHandler={onAddHandler} />

            <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Roll No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Class</th>
                    <th>Actions</th>
                </tr>
            </thead>
                <tbody>
                    {data.map((item) => {
                        return (
                            <Tableitem item={item} onClickHandler={onClickHandler} onClickUpdatehandler={onClickUpdatehandler} />
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}