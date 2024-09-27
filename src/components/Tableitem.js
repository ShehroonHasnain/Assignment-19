

export default function Tableitem(props) {
   
    return (
        <tr>
            <td>{props.item?.id}</td>
            <td>{props.item?.rollNo}</td>
            <td>{props.item?.name}</td>
            <td>{props.item?.email}</td>
            <td>{props.item?.classname}</td>
            <button onClick={()=>props.onClickUpdatehandler(props.item)} class="updateBtn">Update</button>
            <button onClick={()=>props.onClickHandler(props.item.id)} class="deleteBtn">Delete</button>
        </tr>
    )
}
