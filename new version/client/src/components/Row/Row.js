import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const Row = props => (
    <tr>
        <th scope="row">{props.item.name}</th>
        <td>{props.item.price}</td>
        <td>{props.item.url}</td>
        <td>{props.item.occasion}</td>
        <td>{props.item.comments}</td>
        <td><button>Never Mind</button></td>
    </tr>
    );

export default Row;