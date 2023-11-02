import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/base/Layout';
import Account from './pages/Account';
import { Login } from './pages/Login';



function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        {/* Rotas sem o Layout */}
        <Routes>
          <Route path='/' element={<Login />} />
        </Routes>
        {/* Rotas com o Layout */}
        <Layout>
          <Routes>
            <Route path='/account' element={<Account />} />
          </Routes>
        </Layout>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
