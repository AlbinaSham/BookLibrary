
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import WishList from "./Components/WishList/WishList";
import { GlobalProvider } from "./context/GlobalState";




function App() {
  return (
    <GlobalProvider>
    <div >
      
  
     
<Router>
  <Header />
    <Switch>
    
      <Route exact path = "/">
        <Home /> 
      </Route>

      <Route exact path = "/wishlist">
        <WishList />
      </Route>

    </Switch>
</Router>

      
    </div>
    </GlobalProvider>
  );
}

export default App;
