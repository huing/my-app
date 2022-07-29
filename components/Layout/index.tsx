import { Link, Outlet } from "react-router-dom";

export const About = () => {
  return <div>About</div>;
};

export const Contact = () => {
  return <div>Contact</div>;
};

const Layout = () => {
  return (
    <div>
      Layout
      <div>
        <Link to="about">about</Link>
        <Link to="contact">contact</Link>
      </div>
      <Outlet />
    </div>
  );
};
export default Layout;
