import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
import './App.css';

import { useState } from "react";

function App() {

  const [items, setItems] = useState(
   [
    {
      id: 1,
      checked: true,
      itemName: "This is a CSS"
    },
    {
      id: 2,
      checked: true,
      itemName: "This is a HTML"

    },
    {
      id: 3,
      checked: true,
      itemName: "This is a Javascript"
    },
   ] 
  )
  
  const [newItem, setNewItem] = useState('')
  
  //new item 
  const handleSumbit = (e)=>{
   e.preventDefault(); //preventing the post page

   console.log('Inserted: ' + newItem)
    
   const idx = items.length ? items[items.length - 1 ].id + 1 : 1; //identifying the last id created
   /* 
    if(items.length > 0){
      //items.length = 3
      //3 - 1 
      //2
      //[2].id
     idx = items[items.length - 1].id + 1  //4
    } else {
      idx = 1
    }*/

   console.log(idx);
   const myNewItem = { 
                      id:idx, 
                      checked:false,  
                      itemName:newItem 
                     };
   
   const listItems = [...items, myNewItem]; //adding an element into an arrays of obejcts, using spread operator
   setItems(listItems);
   setNewItem('');
  }

  const handleCheckBox = (id)=>{
  const listItems = items.map( (item) => item.id === id ? { ...item, checked: !item.checked } : item )
  setItems(listItems);
  }

  const handleDelete = (id)=> {
  console.log('test delete ' + id)
  const listItems = items.filter( (item) => item.id !== id  )
  setItems(listItems)
  }

  
  let average = 100 / 5;

  return (
    
    <div className="App">

      <Header 
      title="WD74P" 
      description="Header for React CRUD (create, read, update and delete) app example" 
      average={average} 
      />

      <AddItem
      handleSumbit = {handleSumbit}
      newItem = {newItem} 
      setNewItem = {setNewItem}
      />


      <Content 
      items = {items} 
      handleCheckBox = {handleCheckBox}
      handleDelete = {handleDelete}
      />

      <Footer />

    </div>

  );
}

export default App;
