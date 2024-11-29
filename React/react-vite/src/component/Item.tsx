export function Item(props: {title: string, description: string}) {
    return (
        <>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </>
    );
}