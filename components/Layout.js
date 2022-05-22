import Navbar from "./NavBar";
import ActiveResource from "components/ActiveResource";

const Layout = ({children}) =>
  <>
    <Navbar />
    <ActiveResource />
    { children }
  </>

export default Layout;

