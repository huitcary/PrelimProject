import React, {useState, useEffect} from "react"
import { View } from "./components/View";

//getting values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('author');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export const App = () => {

  const [authors, setAuthors]= useState([getDatafromLS()]);

  //input field states
  const [name, setName]= useState('');
  const [nationality, setNationality]= useState('');
  const [genre, setGenre]= useState('');
  const [book_written, setBookWritten]= useState('');
  const [book_sold, setBookSold]= useState('');

  //form submit event
  const handleAddAuthorSubmit=(e)=>{
    e.preventDefault();

    //creating an object
    let author={
      name,
      nationality,
      genre,
      book_written,
      book_sold
    }
    setAuthors([...authors, author]);
    setName('');
    setNationality('');
    setGenre('');
    setBookWritten('');
    setBookSold('');
  }

  //delete from LS
  const deleteAuthor=(name)=>{
    const filteredAuthors=authors.filter((element,index)=>{
      return element.name !== name
    })
    setAuthors(filteredAuthors);
  }

  //saving data to local storage
  useEffect(()=>{
    localStorage.setItem('authors', JSON.stringify(authors));
  },[authors])

  return(
    <div className="wrapper">
      <h1><b>Author Entry List</b></h1>
      <div className="main">
        <div className="form-container">
          <form autoComplete="off" className="form-group"
          onSubmit={handleAddAuthorSubmit}>
            <label>Name</label>
            <input type="text" className="form-control" required
            onChange={(e)=>setName(e.target.value)} value={name}></input>
            <br></br>
            <label>Nationality</label>
            <input type="text" className="form-control" required
            onChange={(e)=>setNationality(e.target.value)} value={nationality}></input>
            <br></br>
            <label>Genre</label>
            <input type="text" className="form-control" required
            onChange={(e)=>setGenre(e.target.value)} value={genre}></input>
            <br></br>
            <label>Book Written</label>
            <input type="text" className="form-control" required
            onChange={(e)=>setBookWritten(e.target.value)} value={book_written}></input>
            <br></br>
            <label>Book Sold</label>
            <input type="text" className="form-control" required
            onChange={(e)=>setBookSold(e.target.value)} value={book_sold}></input>
            <br></br>
            <button type="submit" className="btn btn-success btn-md">
              Add Author
            </button>
          </form>
        </div>

        <div className="view-container">
          {authors.length>0&&<>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Nationality</th>
                  <th>Genre</th>
                  <th>Book Written</th>
                  <th>Book Sold</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <View authors={authors} deleteAuthor={deleteAuthor}/>
              </tbody>
            </table>
          </div>
          <button className="btn btn-danger btn-md" 
          onClick={()=>setAuthors([])}>Remove All</button>
          </>}
          {authors.length <1 && <div>There is no authors added.</div>}
        </div>
      </div>
    </div>
  )
}

export default App;