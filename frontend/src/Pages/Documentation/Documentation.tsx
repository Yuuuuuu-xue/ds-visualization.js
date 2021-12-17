import {FC, ReactElement } from 'react';
import './Documentation.scss';

interface Props {

}


const Documentation: FC<Props> = (): ReactElement => {
  return (
    <div className='documentation'>
      <h1 className='title'>Documentation</h1>
    </div>
  )
}

export default Documentation;