import { Helmet } from 'react-helmet';
import Banner from '../Banner/Banner';
import Input from '../Input/Input';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bloodonors - Home</title>
      </Helmet>
      <Banner></Banner>
      <Input></Input>
    </div>
  );
};

export default Home;
