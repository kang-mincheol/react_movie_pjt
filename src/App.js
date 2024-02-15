import React, {useEffect, useState} from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  })
  
  return (
    <div className="App">
      {isLoading ? "Loading...": "We are ready"}
    </div>
  );
}

export default App;
