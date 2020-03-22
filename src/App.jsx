import React from 'react';
import { LandingPage } from './components/LandingPage/LandingPage';
import { Route, Switch } from 'react-router-dom';
import { Search } from './components/Search/Search';

function App() {
    return ( 
        <Switch > { /*similar to switch case. will look at URL and choose 1st case that matches*/ } 
        <Route path = '/search' component = { Search }/> 
         <Route path = '/' component = {LandingPage}/>  
        </Switch>

    );
}

export default App;