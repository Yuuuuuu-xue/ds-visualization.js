import {FC, ReactElement, useEffect } from 'react';
import setTitle from '../../utils/setTitle';
import './Documentation.scss';

interface Props {

}


const Documentation: FC<Props> = (): ReactElement => {
  
  useEffect(() => {
    setTitle('Documentation');
  }, [])

  return (
    <div className='documentation'>
      <h1 className='title'>Documentation</h1>
    </div>
  )
}

export default Documentation;