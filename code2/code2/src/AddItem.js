
const AddBooks = ( {handleSumbit, newBooks, setNewBooks} ) =>{

    return (
        <div className="AddBooks">

                <form className="addForm" onSubmit={handleSumbit}>

                    <input 
                    type="text"
                    placeholder="Add Books"
                    setfocus
                    required
                    value={newBooks}
                    onChange={ (e) => setNewBooks(e.target.value) }
                    />   

                    <button type="submit">Add Books </button>

                </form>


        </div>
    )

}

export default AddBooks;