// import ListStudents from './components/ListStudents';
import AddContact from './components/AddContact';
import UpdateContact from './components/UpdateContact';
import DeleteContact from './components/DeleteContact';
import ViewContact from './components/ViewContact';
import ListContacts from './components/ListContacts';


import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
    return (
        <div>
          <Router>
          <Header />
            <div className="container">
              <Switch>
                  <Route path="/" exact component={ListContacts}></Route>
                  <Route path="/contacts" component={ListContacts}></Route>
                  <Route path="/add-contact" component={AddContact}></Route>
                  <Route path="/update-contact/:id" component={UpdateContact}></Route> 
                  <Route path="/delete-contact/:id" component={DeleteContact}></Route> 
                  <Route path="/view-contact/:id" component={ViewContact}></Route> 
                  
              </Switch>
            </div>
            <Footer />
            
          </Router>
        </div>
  );
}

export default App;