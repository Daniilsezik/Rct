import React from 'react';
import Str from "./Str";
import MyInput from "./MyInput";
import MyButton from "./MyButton";
const MyTable = (props) => {
    return (
        <div>
            <table border="1px" className="table">
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>DATECREATION</th>
                </tr>
               {props.table.map(element =>
                   <tr key = {element.id}>
                       <td>{element.id}</td>
                       <td>{element.name}</td>
                       <td>{element.dateCreation}</td>
                   </tr>
               )}
            </table>
            </div>
        );
    };

export default MyTable;