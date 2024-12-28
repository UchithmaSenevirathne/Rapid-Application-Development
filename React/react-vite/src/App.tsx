import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
// import {Subject} from "./component/Subject.tsx";
import {Dashboard} from "./pages/Dashboard.tsx";
import {Add} from "./pages/Add.tsx";
import {Error} from "./pages/Error.tsx";
import {Update} from "./pages/Update.tsx";
import {Delete} from "./pages/Delete.tsx";
import {RootLayout} from "./component/RootLayout.tsx";
import {CustomerProvider} from "./store/CustomerProvider.tsx";
import {ItemProvider} from "./store/ItemProvider.tsx";
// import {Login} from "./component/Login.tsx";
// import {Subject} from "./component/Subject.tsx";
// import ButtonComponent from "./component/ButtonComponent.tsx";
// import {ChangeEvent, useState} from "react";
// import {useState} from "react";
// import {Customer} from "./models/Customer.ts";
// import {Item} from "./component/Item.tsx";
// import {ItemList} from "./Items.ts";

function App() {

    const routes = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout/>,
            children: [
                {path: "/", element: <Dashboard/>},
                {path: "/add", element: <Add/>},
                {path: "/update", element: <Update/>},
                {path: "/delete", element: <Delete/>}
            ]
        },
        {path: "*", element: <Error/>}
    ])

    return (
        <>
            <CustomerProvider>
                <ItemProvider>
                <RouterProvider router={routes}></RouterProvider>
                </ItemProvider>
            </CustomerProvider>
        </>
    )
}

export default App

{/*<ButtonComponent name="Add"></ButtonComponent>*/
}
{/*<ButtonComponent name="Delete"></ButtonComponent>*/
}
{/*<ButtonComponent name="Update"></ButtonComponent>*/
}

{/*============================01===========================*/
}

{/*<Item title={ItemList[0].title} description={ItemList[0].description} />*/
}
{/*<Item title={ItemList[1].title} description={ItemList[1].description} />*/
}
{/*<Item title={ItemList[2].title} description={ItemList[2].description} />*/
}

{/*===========================02================================*/
}

{/*<Item {...ItemList[0]}/>*/
}
{/*<Item {...ItemList[1]}/>*/
}
{/*<Item {...ItemList[2]}/>*/
}

{/*=============================03===========================*/
}

{/*{ItemList.map((item) => (*/
}
{/*    <Item title={item.title} description={item.description} />*/
}
{/*))}*/
}

// ===========================04=========================
// const itemArray = [];
//
// for (const item of ItemList) {
//     itemArray.push(<Item title={item.title} description={item.description} />);
// }

{/*{itemArray}*/
}

// =============================================================
//
// const isLogin = false;
//
// let content;
//
// if (isLogin) {
//     content = <Dashboard />;
// }else {
//     content = <Login />;
// }

// {content}

// ============================================================
{/*<ButtonComponent>Click Me</ButtonComponent>*/
}

// ================================================================
// <Subject name = "RAD">
//     lorem ipsum dolor sit amet, consetetur
// </Subject>
// <Subject name = "MAD">
//     lorem ipsum dolor sit amet, consetetur
// </Subject>
// <Subject name = "OOP">
//     lorem ipsum dolor sit amet, consetetur
// </Subject>

//=======================================================
{/*<ButtonComponent onSelect={handleClick}>Button A</ButtonComponent>*/
}
{/*<ButtonComponent onSelect={handleClick}>Button B</ButtonComponent>*/
}

// const handleClick = (name: string) => {
//     alert(name + " clicked!");
// }

//=======================================
// const [content, setContent] = useState("default");
//
// const subjects = [
//     {
//         sName: "RAD",
//         sDesc: "lorem ipsum RAD"
//     },
//     {
//         sName: "JS",
//         sDesc: "lorem ipsum JS"
//     },
//     {
//         sName: "React",
//         sDesc: "lorem ipsum React"
//     }
// ]
//
// const handleClick = (name:string) => {
//     let desc;
//     subjects.map((subject) => {
//         if(subject.sName === name) {
//             desc = subject.sDesc;
//         }
//     })
//     setContent(name);
//     alert(desc);
// }

{/*{subjects.map((subject) => {*/
}
{/*    return <ButtonComponent onSelect={handleClick}>{subject.sName}</ButtonComponent>*/
}
{/*})}*/
}
{/*<br/>*/
}
{/*<h1>{content}</h1>*/
}

// ============================================================


// const [count, setCount] = useState(0);

// <h1>{count}</h1>
// <br/>
{/*<button onClick={()=>setCount(count + 1)}>Add</button>*/
}
{/*<button onClick={()=>setCount(count - 1)}>Sub</button>*/
}
// <ButtonComponent count={count} setCount={setCount}>Add</ButtonComponent>
// <ButtonComponent count={count} setCount={setCount}>Sub</ButtonComponent>


//===================================================

// const [userData, setUserData] = useState({
//     firstName: "",
//     lastName: "",
// })
//
// const [show, setShow] = useState(false);
//
// function handleEvent(event: ChangeEvent<HTMLInputElement>) {
//     const {name, value} = event.target;
//
//     setUserData({
//         ...userData,
//         [name]: value,
//     })
// }
//
// function handleSubmit() {
//     setShow(true);
// }

// <input name='firstName' type='text' onChange={handleEvent} placeholder='First Name' />
// <input name='lastName' type='text' onChange={handleEvent} placeholder='Last Name' />
// <button onClick={handleSubmit}>Add Values</button>
// <br/>
// {show && <p>Hello: {userData.firstName + ' ' + userData.lastName}</p>}

//=========================================================

// const [customers, setCustomers] = useState<Customer[]>([]);
//
// const [name, setName] = useState("");
// const [address, setAddress] = useState("");
// const [email, setEmail] = useState("");
// const [phone, setPhone] = useState("");
//
// function addCustomer(){
//     const newCustomer = new Customer(name, address, email, phone);
//     setCustomers((customers) => [...customers, newCustomer]);
// }
//
// function deleteCustomer(){
//     setCustomers((customers) => customers.slice(0,-1))
// }
//
// function deleteByEmail(){
//     setCustomers((customers) => customers.filter((customer) => customer.email !== email));
// }
//
// function updateCustomer() {
//     setCustomers(
//         customers.map((customer) =>
//             customer.email === email
//                 ? {
//                     ...customer,
//                     name: name,
//                     address: address,
//                     email: email,
//                     phone: phone,
//                 }
//                 : customer
//         )
//     );
// }

{/*<input type='text' placeholder='Name' onChange={(e) => setName(e.target.value)}/>*/
}
{/*<input type='text' placeholder='Address' onChange={(e) => setAddress(e.target.value)}/>*/
}
{/*<input type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>*/
}
{/*<input type='text' placeholder='Phone' onChange={(e) => setPhone(e.target.value)}/>*/
}

{/*<br/>*/
}

{/*<button onClick={addCustomer}>Add Customer</button>*/
}
{/*<button onClick={deleteCustomer}>Delete Customer</button>*/
}
{/*<button onClick={deleteByEmail}>Delete By Email</button>*/
}
{/*<button onClick={updateCustomer}>Update Customer</button>*/
}
{/*<br/>*/
}

{/*{customers.map((customer) => (*/
}
{/*    <div>{customer.name + ' ' + customer.address + ' ' + customer.email + ' ' + customer.phone}</div>*/
}
{/*))}*/
}

