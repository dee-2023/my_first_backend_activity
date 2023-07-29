
const AddItem = ( {handleSumbit, newItem, setNewItem} ) =>{

    return (
        <div className="AddIten">

                <form className="addForm" onSubmit={handleSumbit}>

                    <input 
                    type="text"
                    placeholder="Add Item"
                    setfocus
                    required
                    value={newItem}
                    onChange={ (e) => setNewItem(e.target.value) }
                    />   

                    <button type="submit">Add Itenm </button>

                </form>


        </div>
    )

}

export default AddItem;