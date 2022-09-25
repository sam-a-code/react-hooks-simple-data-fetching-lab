// create your App component here
import React, {useEffect, useState} from "react";


function App() {
    const [dog, setDog] = useState(null)


    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
          setDog(data.message);
          console.log(data)

        });
    }, []);


    if (!dog) return <p>...Loading</p>
    return <img alt="A Random Dog" src={dog}/>
 }




export default App