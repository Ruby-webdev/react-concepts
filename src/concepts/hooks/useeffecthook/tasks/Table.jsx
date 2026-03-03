import React from 'react'
import { MdDeleteForever } from 'react-icons/md';
import "./table.css"

const Table = ({ data, deleteProudcts }) => {
    console.log(data);

    return (
        <div className='table'>
             <h1>UseEffectTask1</h1>
            <table border="1" cellPadding="10" >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Product Image</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        // data.slice().sort((a,b)=> a.id - b.id).map((item, index) => {

                        data.slice().sort((a, b) => a.title.localeCompare(b.title)).map((item, index) => {

                            return (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.price * 90}</td>
                                    <td><img src={item.image} alt="" width={100} /></td>
                                    <td><MdDeleteForever onClick={() => { deleteProudcts(item.id) }} fill='red' size={20} /></td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    )
}

export default Table