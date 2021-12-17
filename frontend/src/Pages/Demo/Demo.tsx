import {FC, ReactElement } from 'react';
import './Demo.scss';

interface Props {

}


const Demo: FC<Props> = (): ReactElement => {
  return (
    <div className='demo'>
      <h1 className='title'>Demo</h1>
    </div>
  )
}

export default Demo;