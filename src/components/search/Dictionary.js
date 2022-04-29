
import React, {useState} from "react";

import "./Dictionary.css";

export default function Dictionary(props){
    
    let [loaded, setLoaded] = useState("false");
    


    
    

    function handleSubmit(event){
        event.preventDefault();
        
    }

    

    function load(){
        setLoaded(true);
        
        }
    
        if (loaded){
    return (
     <div className="Dictionary">
         <section>
             <h1>Search for words here</h1>
       <form onSubmit={handleSubmit}>
           <input type="search" />
       
       </form>
       <div className="hint">
           Suggested words: Hello, School, Continent
       </div>
       </section>
    </div>
    );
} else{
    load();
    return "Loading...";
}
}
