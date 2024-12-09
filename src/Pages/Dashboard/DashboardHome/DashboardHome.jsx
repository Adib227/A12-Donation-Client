import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  console.log(user.displayName);

  const [newUser, setNewUser] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/UserCollection`)
      .then(res => res.json())
      .then(data => setNewUser(data));
  }, []);
  console.log(newUser);

  return (
    <div className="">
      <div>
        <h2 className="text-3xl">I am {user?.displayName}</h2>
      </div>
    </div>
  );
};

export default DashboardHome;
