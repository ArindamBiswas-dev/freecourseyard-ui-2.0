import Home from './components/newcomponents/explore/Home';
import './App2.css';
import { Route, Switch } from 'react-router-dom';
import PopularChoices from './components/newcomponents/explore/PopularChoices';
import SuggestCourse from './components/newcomponents/explore/SuggestCourse';
import LogInPage from './components/newcomponents/explore/LogInPage';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/popularchoices" component={PopularChoices} />
        <Route exact path="/suggestcourse" component={SuggestCourse} />
        <Route exact path="/login" render={() => <LogInPage isLogIn={true} />} />
        <Route exact path="/signup" render={() => <LogInPage isLogIn={false} />} />
        <Route exact path="/addacourse" render={() => <SuggestCourse addCourse={true} />} />
      </Switch>
    </div>
  );
}

export default App;