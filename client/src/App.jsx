import './App.css';
import { Outlet } from 'react-router-dom';
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    < >
      <div className="flex-column justify-center align-center min-100-vh bg-primary">
        <Navbar />
        <div className='container'>
        <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });

// function App() {
//   return (
//     <ApolloProvider client={client}>
//       <div className="flex-column justify-center align-center min-100-vh bg-primary">
//         <Navbar />
//         <div className='container'>
//         <Outlet />
//         </div>
//         <Footer />
//       </div>
//     </ApolloProvider>
//   );
// }