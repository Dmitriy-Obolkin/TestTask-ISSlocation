import './App.css';
import CCMain from './CCMain';
import CCGoogleMaps from './CCGoogleMaps';
import $ from "jquery";
import CCPeople from './CCPeople';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="App-pos">
        <CCMain/>

      </div>
      <div className="App-time">
        <div>
        <b>Current UTC time:</b>
        <p> {JSON.parse(JSON.stringify({now: new Date()})).now}</p>
        </div>
      </div>
      
        
      </header>
      <main >
        <div className="container">
          <CCGoogleMaps/>
          {window.setTimeout(function () {
          window.location.reload();
          }, 5000)
          
            //$.ajax('http://api.open-notify.org/iss-now.json')
          }
        </div>
        <div className="astros">
        <CCPeople/>
      </div>
      </main>
    </div>
    
  );
}

export default App;
