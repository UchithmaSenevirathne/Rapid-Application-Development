import {ReactNode} from "react";

export default function ButtonComponent(props:{children: ReactNode}) {
    return (
        <>
            <button>{props.children}</button>
        </>
    )
}