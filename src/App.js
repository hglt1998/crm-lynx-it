import './App.css';
import HomePage from './pages/HomePage';
import NavBar from './components/Navbar';
import ClientsPage from './pages/ClientsPage';
import CreateInvoice from './pages/CreateInvoice';
import NotFoundPage from './pages/NotFoundPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} key={1} />
        <Route path="/clients" element={<ClientsPage />} key={2}/>
        <Route path="/createInvoice" element={<CreateInvoice />} key={3}/>
        <Route path="*" element={<NotFoundPage />} key={6}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
