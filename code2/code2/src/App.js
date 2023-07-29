import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddBooks from './AddItem';
import './App.css';

import { useState } from 'react';

const App = () => {

  const [books, setBooks] = useState([
    {
      id: 1,
      BookName: "PHP 8",
      YearPublished: "2023",
      Author: "VicS",
      Category: "Web",
      status: 1,
    },
    {
      id: 2,
      BookName: "React.js",
      YearPublished: "2000",
      Author: "Peter SMith",
      Category: "Web",
      status: 1,

    },
    {
      id: 3,
      BookName: "CSS framework",
      YearPublished: "2005",
      Author: "Jaguar",
      Category: "Web",
      status: 1,
    },
    {
      id: 4,
      BookName: "Data Science",
      YearPublished: "2023",
      Author: "Vic S",
      Category: "Data",
      status: 1,
  },

])

const handleDelete = (id)=> {
  console.log('test delete ' + id)
  const listBooks = books.filter( (book) => books.id !== id  )
  setBooks(listBooks)
}







  return (
    
    <div className="App">

      <Header 
      title="WD74P" 
      description="Header for React CRUD (create, read, update and delete) app example" 

      />

      <AddBooks/>


      <Content 
      books = {books} 
      />

      <Footer />

    </div>
    

  );
};

export default App
