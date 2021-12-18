import {FC, ReactElement, useEffect } from 'react';
import setTitle from '../../utils/setTitle';
import '../Layout.scss';
import './Documentation.scss';
import Navbar from '../../Components/Navbar';
import DocumentSection from '../../Components/DocumentSection';
import { getConstructorDocumentation } from './DocumentationData';

interface Props {

}


const Documentation: FC<Props> = (): ReactElement => {
  
  useEffect(() => {
    setTitle('Documentation');
  }, [])

  return (
    <div className='documentation layout'>
      <Navbar options={[
        ['Home', '/', true],
        ['Types', '#documentation-type', false],
        ['Constructor', '#documentation-constructor', false]
      ]} />

      <h1 className='title'>Documentation</h1>
      <DocumentSection sectionId='documentation-type' subtitle='Important Types' codeData={[]} />
      <DocumentSection sectionId='documentation-constructor' subtitle='Constructor' codeData={getConstructorDocumentation()} />
    </div>
  )
}

export default Documentation;