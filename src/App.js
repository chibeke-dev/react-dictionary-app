import Layout from './components/layout/Layout';
import Dictionary from './components/search/Dictionary'

import './App.css';

function App() {
  return (
    <div className="App">
    
      <Layout/> 
      <main>
          <Dictionary  />
        </main> 
     
    </div>
  );
}

export default App;
