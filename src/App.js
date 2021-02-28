import Home from "./components/newcomponents/explore/Home";
import "./App2.css";
import { Route, Switch } from "react-router-dom";
import PopularChoices from "./components/newcomponents/explore/PopularChoices";
import SuggestCourse from "./components/newcomponents/explore/SuggestCourse";
import LogInPage from "./components/newcomponents/explore/LogInPage";
import React, { useEffect, useState } from "react";
import LogOut from "./components/newcomponents/explore/LogOut";

export const UserContext = React.createContext();
export const SetUserContext = React.createContext();

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    if (localStorage.getItem("token")) setUser({token: localStorage.getItem("token")});
    console.log(user.token);
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <SetUserContext.Provider value={setUser}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/popularchoices" component={PopularChoices} />
            <Route exact path="/suggestcourse" component={SuggestCourse} />
            <Route
              exact
              path="/login"
              render={() => <LogInPage isLogIn={true} />}
            />
            <Route
              exact
              path="/signup"
              render={() => <LogInPage isLogIn={false} />}
            />
            <Route
              exact
              path="/addacourse"
              render={() => <SuggestCourse addCourse={true} />}
            />
            <Route exact path="/logout" component={LogOut} />
          </Switch>
        </SetUserContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
