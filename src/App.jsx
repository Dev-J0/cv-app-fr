import './App.css'
import './styles/style.css'
import Header from './components/Header'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import MainContent from './components/MainContent'


function App() {

  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <div className="mainContent-container">
        <MainContent />
        </div>
        <div className="sideBar">
      <SideBar />
      </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  )
}

export default App;
