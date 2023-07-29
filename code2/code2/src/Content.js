import { FaTrashAlt } from "react-icons/fa";

const Content = ( {books, handleCheckBox, handleDelete} ) => {

    return(
            <main> 
               <ul>  
                 {books.map(book => (
                  
                    <li className="item" key={books.id}>
                    <input 
                    type="checkbox" 
                    checked={books.checked}
                    onChange={ () => handleCheckBox(books.id) }
                    />

                    {/*label item name*/} 
                    <label>{books.bookName}   </label>
                    <p>Year Published: {book.YearPublished}</p>
                    <p>Author: {book.Author}</p>
                    <p>Category: {book.Category}</p>
                    <p>Status: {book.status}</p>

                    {/*delete*/}
                    &nbsp; 
                    
                    <FaTrashAlt 
                     onClick={()=> handleDelete(books.id)}   
                     role="button"
                     aria-label={`Delete ${books.books} ` } 
                    />

                   </li>
                ))}
            </ul>     
        </main>
    );

};

export default Content;