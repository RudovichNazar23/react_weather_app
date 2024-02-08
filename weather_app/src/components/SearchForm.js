
function SearchForm(){
    return (
        <form className="container d-flex flex-row">
            <input type="text" className="form-control" placeholder="Type the city"></input>
            <button className="btn btn-info btn-rounded m-1">Search</button>
        </form>
    )
}

export default SearchForm;
