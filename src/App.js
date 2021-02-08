import Home from './components/newcomponents/explore/Home';
import './App2.css';
import { Route, Switch } from 'react-router-dom';
import PopularChoices from './components/newcomponents/explore/PopularChoices';
import SuggestCourse from './components/newcomponents/explore/SuggestCourse';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/popularchoices" component={PopularChoices} />
        <Route exact path="/suggestcourse" component={SuggestCourse} />
        <Route exact path="/addacourse" render={() => <SuggestCourse addCourse={true} />} />
      </Switch>
    </div>
  );
}

export default App;