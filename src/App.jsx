import Navbar from "./components/Navbar.jsx";
import Banner from "./components/Banner.jsx";
import Socials from "./components/Socials.jsx";
import Guides from "./components/Guides.jsx";
import Featured from "./components/Featured.jsx";
import Customers from "./components/Customers.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  return (
      <>
          <Navbar/>
          <Banner/>
          <Socials/>
          <Guides/>
          <Featured />
          <Customers />
          <Contact />
          <Footer />
      </>
  )
}

export default App
