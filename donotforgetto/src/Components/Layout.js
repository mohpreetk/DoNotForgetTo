import "../stylesheets/Layout.css";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
// import Home from "./Home";
// import About from "./About";
// import Reminders from "./Reminders";

function Layout() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <header className="App-header forDocFlow">
          <Header />
        </header>

        <main className="App-main">
          <Outlet />
          <Outlet />
          <Outlet />
        </main>

        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default Layout;
