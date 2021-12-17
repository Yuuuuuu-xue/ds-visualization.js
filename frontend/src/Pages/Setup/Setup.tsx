import {FC, ReactElement, useEffect } from 'react';
import setTitle from '../../utils/setTitle';
import './Setup.scss';

interface Props {

}


const Setup: FC<Props> = (): ReactElement => {
  
  useEffect(() => {
    setTitle('Setup')
  }, [])

  return (
    <div className='setup'>
      <h1 className='title'>Setup</h1>
    </div>
  )
}

export default Setup;