import React from 'react';
import { BrowserRouter , Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from "./components/dashboard/Dashboard"

import ProjectDetails from "./components/projects/ProjectDetails"
import SignIn from "./components/auth/SignIn"
import SignUp from "./components/auth/SignUp"
import CreateProject from "./components/projects/CreateProject"
import UpdateProject from "./components/projects/UpdateProject"

const App =()=> {
 
    return (
      <BrowserRouter>
      
          <Navbar />
          <Switch>

<Route path="/" exact component={Dashboard}></Route>
<Route path="/project/:id"  exact component={ProjectDetails}>
</Route>
<Route path="/signIn"  exact component={SignIn}>
</Route>
<Route path="/signUp"  exact component={SignUp}>
</Route>
<Route path="/create"  exact component={CreateProject}>
</Route>
<Route path="/update/:id"  exact component={UpdateProject}>
</Route>
          </Switch>
      
      </BrowserRouter>
    );
  }

export default App;
