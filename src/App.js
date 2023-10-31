import logo from './logo.svg';
import './App.css';
import 'font-awesome/css/font-awesome.css';
import React from 'react'; // Import React
import ReactDOM from 'react-dom';
import Commentaire from './Composants/Commentaire';
import Pictogramme from './Composants/Pictogramme';
import Icone from './Composants/Icone';

function App() {
  return (
    <div className="App">
      <div class="col-6 offset-3">
        <div class="card">
          <div class="card-block">
            <div class="row">
              <div class="col-2">
                <img src="https://thomas-bart.com/wp-content/uploads/2017/03/developper-1680x1201.jpg" class="rounded float-left" classname="img-thumbnail" width="80" height="70" />
              </div>
              <div class="col-10 profile-row">
                <div class="row">
                  <a href="#"><h1> Débuter avec React </h1></a>
                </div>
              </div>
            </div>
            
            <div>
              <Pictogramme />
            </div>
          </div>

          <div class="card-footer text-muted">
            <Commentaire />
          </div>

        </div>
      </div>
    </div>
  );
}
ReactDOM.render(<>

  <App />
</>, document.getElementById("root"))
export default App;
