import { Helmet } from 'react-helmet';
import Banner from '../Banner/Banner';
import Input from '../Input/Input';
import Gallery from '../Gallery/Gallery';
import Appointment from '../Appointment/Appointment';
import Offer from '../Offer/Offer';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bloodonors - Home</title>
      </Helmet>
      <Banner></Banner>
      <Gallery></Gallery>
      <Offer></Offer>
      <Input></Input>
      <Appointment></Appointment>
    </div>
  );
};

export default Home;
