import './App.css'
// import {Subject} from "./component/Subject.tsx";
// import {Dashboard} from "./component/Dashboard.tsx";
// import {Login} from "./component/Login.tsx";
import ButtonComponent from "./component/ButtonComponent.tsx";
// import {Item} from "./component/Item.tsx";
// import {ItemList} from "./Items.ts";

function App() {

  return (
    <>
       <ButtonComponent></ButtonComponent>
    </>
  )
}

export default App

{/*<ButtonComponent name="Add"></ButtonComponent>*/}
{/*<ButtonComponent name="Delete"></ButtonComponent>*/}
{/*<ButtonComponent name="Update"></ButtonComponent>*/}

{/*============================01===========================*/}

{/*<Item title={ItemList[0].title} description={ItemList[0].description} />*/}
{/*<Item title={ItemList[1].title} description={ItemList[1].description} />*/}
{/*<Item title={ItemList[2].title} description={ItemList[2].description} />*/}

{/*===========================02================================*/}

{/*<Item {...ItemList[0]}/>*/}
{/*<Item {...ItemList[1]}/>*/}
{/*<Item {...ItemList[2]}/>*/}

{/*=============================03===========================*/}

{/*{ItemList.map((item) => (*/}
{/*    <Item title={item.title} description={item.description} />*/}
{/*))}*/}

// ===========================04=========================
// const itemArray = [];
//
// for (const item of ItemList) {
//     itemArray.push(<Item title={item.title} description={item.description} />);
// }

{/*{itemArray}*/}

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
{/*<ButtonComponent>Click Me</ButtonComponent>*/}

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

