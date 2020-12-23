import React, { useState } from "react";
import "./App.css";
import Recipe from "./components/Recipe";
import Alert from "./components/Alert";
// import foodie from '../foodie.jpg'

import Axios from "axios";
import {v4 as uuidv4} from "uuid"; // used to generate unique IDs for the recipes

function App() {
  <div  styles={{ backgroundImage:`url(${require("./foodie.jpg")})` }}></div>
  const ID = "bd15d8d6";
  const KEY = "d732dd1f184f5dabdbde5bf5e17afe85";

  const [search, setSearch] = useState(" ");
  const [recipes, setRecipes] = useState([ ]);
  const [alert, setAlert] = useState(" ");

  const URL = `https://api.edamam.com/search?q=${search}&app_id=${ID}&app_key=${KEY}`;

  const getAPIData = async () => {
    if (search !== " ") {
      const searchResult = await Axios.get(URL);

      if (!searchResult.data.more) {// property .more
        return setAlert("Search not found");
      }
        setSearch(" ");
        setAlert(" ");
        setRecipes(searchResult.data.hits); // property .hits

    } else {
        setAlert("Search field empty");
    }

  };

  const onChange = event => setSearch(event.target.value);

  const onSubmit = event => {
    event.preventDefault();

    getAPIData();
  };

  return (
    <div className="App">
      <h1>Fooie</h1>
      <form onSubmit={onSubmit}>
        {alert !== " " && <Alert alert={alert} />}
        <input
          type="text"
          name="search"
          onChange={onChange}
          value={search}
          placeholder="Search Foodie Here"
        />
        <input type="submit" value="Search" />
      </form>
      <div>
        {recipes !== [ ] &&
          recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
      </div>
    </div>
  );
}

export default App;