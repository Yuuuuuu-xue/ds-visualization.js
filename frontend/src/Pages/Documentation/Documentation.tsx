import {FC, ReactElement, useEffect } from 'react';
import setTitle from '../../utils/setTitle';
import './Documentation.scss';
import Navbar from '../../Components/Navbar';

interface Props {

}


const Documentation: FC<Props> = (): ReactElement => {
  
  useEffect(() => {
    setTitle('Documentation');
  }, [])

  return (
    <div className='documentation'>
      <Navbar options={[
        ['Home', '/', true]
      ]} />

      <h1 className='title'>Documentation</h1>
    </div>
  )
}

export default Documentation;