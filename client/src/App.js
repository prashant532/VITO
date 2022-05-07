// // import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
// import Navbar from "./components/Navbar";
// import Welcome from "./components/Welcome"
// import Footer from "./components/Footer";
// import Services from "./components/Services"
// import Transactions from "./components/Transactions"

import { Navbar, Welcome, Footer, Services } from "./components";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />

    <Footer />
  </div>
);

export default App;