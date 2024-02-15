import React, {useEffect, useState} from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState(false);

  const getMovies = () => {
    fetch("https://yts.mx/api/v2/list_movies.json")
      .then(res => res.json())
      .then((res) => {
        console.log(res);
        setMovies(res);
      })
    // try {
    //   const response = await axios.get("https://yts.mx/api/v2/list_movies.json");
    //   setMovies(response);
    // } catch (e) {
    //   console.log(e);
    // }
  }

  useEffect(() => {
    // getMovies();
    // console.log(movies);
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 3000);
    console.log(1);
  }, [movies]);

  
  
  return (
    <div className="App">
      {isLoading ? "Loading...": "We are ready"}
    </div>
  );
}

export default App;
