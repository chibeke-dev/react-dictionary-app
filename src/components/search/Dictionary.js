
import React  from "react";
import "./Dictionary.css";

export default function Dictionary(props){
    
    return (
     <div className="Dictionary">
         <section>
             <h1>Search for words here</h1>
       <form >
           <input type="search" />
       
       </form>
       <div className="hint">
           Suggested words: Hello, School, Continent
       </div>
       </section>
    </div>
    );
} 
