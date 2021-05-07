import { Switch, Route, Redirect } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import routes from './routes';

import Container from './components/Container';
import AppBar from './components/AppBar';
import Loader from './components/Loader';

// import ContactForm from './components/ContactForm';
// import ContactList from './components/ContactList';
// import Filter from './components/Filter';
// import { connect } from 'react-redux';
// import { useEffect } from 'react';
// import { contactsOperations, contactsSelectors } from './redux/contacts';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "home-page" */),
);
const ContactsPage = lazy(() =>
  import('./views/ContactsPage' /* webpackChunkName: "movies-page" */),
);

const App = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.contacts} component={ContactsPage} />
          <Redirect to={routes.home} />
        </Switch>
      </Suspense>
    </Container>
  );
};

// const mapStateToProps = state => ({
//   isLoading: contactsSelectors.getLoading(state),
//   isError: contactsSelectors.getError(state),
// });

// const mapDispatchToProps = dispatch => ({
//   fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
// });

export default App;
