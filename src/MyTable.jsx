import React from 'react';
import Str from "./Str";
import MyInput from "./MyInput";
import MyButton from "./MyButton";
const MyTable = (props, remove) => {
    return (
        <div className="tablediv">
            <table border="1px">
                <tr>
                    <th width="10%">ID</th>
                    <th width="50%">NAME</th>
                    <th width="40%">DATECREATION</th>
                </tr>

                <tbody>
                    {props.table.map(element =>
                        <tr key = {element.id}>
                            <td width="10%">{element.id}</td>
                            <td width="50%">{element.name}</td>
                            <td width="40%">{element.dateCreation}</td>
                            <td width="40px"><MyButton onClick = {() => props.remove(element.id)}>Remove</MyButton></td>
                        </tr>
                    )}
                </tbody>
            </table>
            </div>
        );
    };

export default MyTable;