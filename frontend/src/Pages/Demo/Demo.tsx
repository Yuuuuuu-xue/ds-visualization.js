import {FC, ReactElement, useEffect } from 'react';
import setTitle from '../../utils/setTitle';
import './Demo.scss';

interface Props {

}


const Demo: FC<Props> = (): ReactElement => {

  useEffect(() => {
    setTitle('Demo');
  }, [])

  return (
    <div className='demo'>
      <h1 className='title'>Demo</h1>
    </div>
  )
}

export default Demo;