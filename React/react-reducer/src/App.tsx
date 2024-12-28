import './App.css'
import {useReducer, useState} from "react";
import {CustomerReducer, initialState} from "./reducers/CustomerReducer.ts";
import {Customer} from "./Customer.ts";

function App() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [customers, dispatch] = useReducer(CustomerReducer, initialState);

    function addCustomer(){
        const newCustomer = new Customer(name, email, phone);
        dispatch({type: 'ADD_CUSTOMER', payload: newCustomer})
    }

    return (
        <>
            <input
                type={"text"}
                placeholder={"Name"}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type={"text"}
                placeholder={"Email"}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type={"text"}
                placeholder={"Phone"}
                onChange={(e) => setPhone(e.target.value)}
            />
            <button onClick={addCustomer}>
                Add Customer
            </button>
            <br/>
            {customers.map(customer => (
                <div>{customer.name + ' ' + customer.email + ' ' + customer.phone}</div>
            ))}
        </>
    )
}

export default App

// function  countReducer(state: number, action: {type: string, payload: number}) {
//     switch(action.type) {
//         case 'INCREMENT':
//             return state + action.payload
//         case 'DECREMENT':
//             return state - action.payload
//         default:
//             return state;
//     }
// }
//
// function App() {
//     const [count, dispatch] = useReducer(countReducer, 0);
//     return (
//         <>
//             {count}
//             <br/>
//             <button onClick={() => dispatch({type: 'INCREMENT', payload: 1})}>Increment</button>
//             <button onClick={() => dispatch({type: 'DECREMENT', payload: 1})}>Decrement</button>
//         </>
//     )
// }

//=========================================================================================================

// function App() {
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [name, dispatch] = useReducer(nameReducer, { firstName: "", lastName: "" });
//
//     return (
//         <>
//             <input
//                 type={"text"}
//                 placeholder={"First Name"}
//                 onChange={(e) => setFirstName(e.target.value)}
//             />
//             <input
//                 type={"text"}
//                 placeholder={"Last Name"}
//                 onChange={(e) => setLastName(e.target.value)}
//             />
//             <button onClick={() => dispatch({type: 'PRINT', payload: {firstName, lastName}})}>
//                 Print
//             </button>
//             <br/>
//             <p>{name.firstName} {name.lastName}</p>
//         </>
//     )
// }

