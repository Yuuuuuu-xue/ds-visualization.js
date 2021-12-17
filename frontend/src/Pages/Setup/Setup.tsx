import {FC, ReactElement } from 'react';
import './Setup.scss';

interface Props {

}


const Setup: FC<Props> = (): ReactElement => {
  return (
    <div className='setup'>
      <h1 className='title'>Setup</h1>
    </div>
  )
}

export default Setup;