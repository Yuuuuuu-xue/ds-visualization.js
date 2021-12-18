import {FC, ReactElement, useEffect } from 'react';
import setTitle from '../../utils/setTitle';
import '../Layout.scss';
import './Documentation.scss';
import Navbar from '../../Components/Navbar';
import DocumentSection from '../../Components/DocumentSection';
import { getCanvasDocumentation, getConstructorDocumentation, getDialogDocumentation, getEdgeDocumentation, getGraphDocumentation, getImportantTypesDocumentation, getVertexDocumentation } from './DocumentationData';

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
        ['Constructor', '#documentation-constructor', false],
        ['Canvas', '#documentation-canvas', false],
        ['Dialog', '#documentation-dialog', false],
        ['Vertex', '#documentation-vertex', false],
        ['Edge', '#documentation-edge', false],
        ['Graph', '#documentation-graph', false]
      ]} />

      <h1 className='title'>Documentation</h1>
      <DocumentSection sectionId='documentation-type' subtitle='Important Types' codeData={getImportantTypesDocumentation()} />
      <DocumentSection sectionId='documentation-constructor' subtitle='Constructor' codeData={getConstructorDocumentation()} />
      <DocumentSection sectionId='documentation-canvas' subtitle='Canvas' codeData={getCanvasDocumentation()} />
      <DocumentSection sectionId='documentation-dialog' subtitle='Dialog' codeData={getDialogDocumentation()} />
      <DocumentSection sectionId='documentation-vertex' subtitle='Vertex' codeData={getVertexDocumentation()} />
      <DocumentSection sectionId='documentation-edge' subtitle='Edge' codeData={getEdgeDocumentation()} />
      <DocumentSection sectionId='documentation-graph' subtitle='Graph' codeData={getGraphDocumentation()} />
    </div>
  )
}

export default Documentation;