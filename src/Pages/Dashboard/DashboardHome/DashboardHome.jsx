import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  console.log(user.displayName);

  return (
    <div className="">
      <div>
        <h2 className="text-3xl">I am {user?.displayName}</h2>
      </div>
    </div>
  );
};

export default DashboardHome;
