import { Helmet } from 'react-helmet';
import Banner from '../Banner/Banner';
import Input from '../Input/Input';
import Gallery from '../Gallery/Gallery';
import Appointment from '../Appointment/Appointment';
import Offer from '../Offer/Offer';
import Process from '../Process/Process';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bloodonors - Home</title>
      </Helmet>
      <Banner></Banner>
      <Gallery></Gallery>
      <Offer></Offer>
      <Process></Process>
      <Input></Input>
      <Appointment></Appointment>
    </div>
  );
};

export default Home;
