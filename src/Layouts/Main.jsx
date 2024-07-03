import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Home/Home/Navbar/Navbar';
import Footer from '../Pages/Home/Footer/Footer';
import Banner from '../Pages/Home/Home/Banner/Banner';
import Input from '../Pages/Home/Home/Input/Input';

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Banner></Banner>
      <Input></Input>
      <Footer></Footer>
    </div>
  );
};

export default Main;
