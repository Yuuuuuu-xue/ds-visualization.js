import React, { useEffect } from "react";
import Navbar from '../../Components/Navbar';
import './NotFound.scss';

interface Props {

}

const NotFound: React.FC<Props> = (): React.ReactElement => {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/";
    }, 3000);
  }, [])
  

  return (
    <div className="not-found">
      <Navbar options={[]} />
      <h1 className="title">404 Not Found</h1>
    </div>
  )
};

export default NotFound;