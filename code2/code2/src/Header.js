const Header = ( { title, description }  ) =>{

    return(
            <header> 
                
              <h1>
                {title}   
              </h1>  
              <p> { description } </p>
        
   
            </header>
    )


}

Header.defaultProps = {
  title : 'My deafault title'
  
}  

export default Header;