// import {ReactNode} from "react";

// export default function ButtonComponent(props:{children: ReactNode}) {
//     return (
//         <>
//             <button>{props.children}</button>
//         </>
//     )
// }

export default function ButtonComponent() {
    const handleClick = () => {
        alert('Button clicked!')
    }

    return (
        <>
            <button onClick={handleClick}>Click me!</button>
        </>
    )
}