import React, { Component } from 'react';
import { BrowserRouter , Route} from 'react-router-dom'; 


//import CoverPage from './components/coverpage/coverPage';
import Navbar from './components/navbar';
import Home from './containers/home/home';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="App">
      <BrowserRouter>
      <>
       {/* <CoverPage exact path ='/Welcome' component={CoverPage}/> */}
       <Route path='/' component={Navbar} />
       <Route path='/' exact component={Home} />



       </>
       </BrowserRouter>
      </div>
      </React.Fragment>
    );
  }
}

export default App;
