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




// import './App.css';
// import { Route, Switch } from 'react-router-dom';
// import AllPopularChoice from './components/AllPopularChoice';
// import HomePage from './components/HomePage';
// import TagSearchPage from './components/TagSearchPage';

//        <Switch>
//        <Route exact path="/" component={HomePage} />
//        <Route excat path="/popularchoice" component={AllPopularChoice} />
//        <Route excat path="/:id" component={TagSearchPage} />
//        </Switch>