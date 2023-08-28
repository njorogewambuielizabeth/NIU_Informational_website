import logo from './logo.svg';
import './App.css';
import Navbar from './components/navigationBar/NavBar';
import Footer from './components/footer/footer';
import Team from './components/team/team';


function App() {
  return (
    <div>
    <Navbar />
    {/* Your main content */}
    <Team/>
    <Footer />
  </div>
  
  );
}

export default App;
