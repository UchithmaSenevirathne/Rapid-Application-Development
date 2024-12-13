// import {ReactNode} from "react";

export default function ButtonComponent(props) {

    let value = props.count;

    if(props.children == "Add"){
        value += 1
    }else {
        value -= 1
    }

    return (
        <>
            <button onClick={()=>{props.setCount(value)}}>{props.children}</button>
        </>
    )
}

// export default function ButtonComponent(props:{children:ReactNode, onSelect: any}) {
//
//     return (
//         <>
//             <button onClick={()=>{props.onSelect(props.children)}}>{props.children}</button>
//         </>
//     )
// }


// export default function ButtonComponent(props:{children: ReactNode}) {
//     return (
//         <>
//             <button>{props.children}</button>
//         </>
//     )
// }