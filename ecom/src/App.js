// import './assets/css-js/StyleFromPortfolio.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css-js/styles.css';
import Header from './components/Header.js';
import UsersList from './redux-app/features/admin/UsersList.js';
import NewUserForm from './components/RegistrationForm.js';
import {BrowserRouter as Router,Routes,Route,Link,useLocation} from 'react-router-dom';
import MyForm from './components/MyForm.js';
import AboutUs from './components/AboutUs.js';
import LoginForm from './components/LoginForm.js';
import Home from './components/Home.js';
import ContactUs from './components/ContactUs.js';
import PageNotFound from './404-PageNotFound.js';
import { Provider } from 'react-redux';
import { store } from './redux-app/store.js';
function App() {

  return (
    <Provider store={store}>
    <Router>
    <div className='container-fluid main-container'>
    <header>
      <Header role='user'/>
    </header>
    <main >
    <Routes>
      <Route exact path='/' element={<Home />} />
      {/* <Route path='/sign-in' element={<LoginForm/>} />
      <Route path='/sign-up' element={<NewUserForm/>} /> */}
      <Route path='/about-us' element={<AboutUs/>} />
      <Route path='/contact-us' element={<ContactUs/>} />
      <Route path='/admin'>
        <Route path='user-list' element={<UsersList/>} />
      </Route>
      <Route path='*' element={<PageNotFound/>} />
    </Routes>
    </main>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
