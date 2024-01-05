import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  //might have to change uri
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div >
        {/* navbar and footer below */}
        <Outlet />
      </div>
    </ApolloProvider>
  );
}
export default App;
