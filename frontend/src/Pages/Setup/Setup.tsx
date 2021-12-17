import {FC, ReactElement, useEffect } from 'react';
import setTitle from '../../utils/setTitle';
import './Setup.scss';
import Navbar from '../../Components/Navbar';

interface Props {

}


const Setup: FC<Props> = (): ReactElement => {
  
  useEffect(() => {
    setTitle('Setup')
  }, []);

  return (
    <div className='setup'>
      <Navbar options={[
        ['Home', '/']
      ]} />
      <h1 className='title'>Setup</h1>
    </div>
  )
}

export default Setup;