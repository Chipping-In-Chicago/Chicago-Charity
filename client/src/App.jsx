import './App.css';
import { Outlet } from 'react-router-dom';
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    < >
      <Navbar />

      <Outlet />

      <Footer />
    </>
  );
}
export default App;

