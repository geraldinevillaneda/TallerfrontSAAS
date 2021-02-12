import React from 'react';
import RenderPoints from './RenderPoint';
import './App.css';

const location = [4.08466, -76.19536];
const locationPrueba = [4.08470, -76.19550];
const zoom = 12;

const estacinesDeServicioTulua = {

};


class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {apiResponse: ''};
  }
  callAPI()
  {
    fetch("http://localhost:5000/")
      .then(res => res.text())
      .then(res => this.setState({apiResponse: res}));
  }

  componentWillMount()
  {
    this.callAPI();
  }
 
  render()
  {
    return(
      <div className="App">
        <div>
          <RenderPoints />
        </div>
        <div>
          <p>
            {this.state.apiResponse}
          </p>
        </div>
      </div>
    );
  }
}


export default App;


