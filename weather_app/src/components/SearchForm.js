import { useState } from "react";


function SearchForm({ onChange, onSubmit, city }){
    return (
        <form className="container d-flex flex-row" onSubmit={onSubmit}>
            <input type="text" className="form-control" placeholder="Type the city" onChange={onChange} value={city} name="cityName"/>
            <button className="btn btn-info btn-rounded m-1">Search</button>
        </form>
    )
}

export default SearchForm;
