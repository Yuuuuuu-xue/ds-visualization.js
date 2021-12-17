import {FC, ReactElement, useEffect } from 'react';
import setTitle from '../../utils/setTitle';
import './Demo.scss';
import Navbar from '../../Components/Navbar';
import '../Layout.scss';
import { getCGController, getCGControllerToString, getVCController, getVCControllerToString } from './graph';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import GraphDemo from '../../Components/GraphDemo';

interface Props {
  ds: any
}


const Demo: FC<Props> = ({ ds }): ReactElement => {

  const dsCGC = getCGController(ds);
  const dsVCC = getVCController(ds);

  const insertDom = (dsController: any, includeDialog: boolean, target: HTMLElement | null): void => {
    if (target) {
      target.innerHTML = '';
      target.insertAdjacentElement('beforeend', dsController.getCanvasElement());
      if (includeDialog === true) {
        target.insertAdjacentElement('beforeend', dsController.getDialogElement());
      }
    }
  }

  useEffect(() => {
    setTitle('Demo');
    insertDom(dsCGC, true, document.getElementById('clickable-graph-demo'));
    insertDom(dsVCC, true, document.getElementById('config-vertex-demo'));
  }, []);

  const graphDemoProps = [
    {
      sectionId: 'clickable-graph',
      description: 'A graph that you can click on each vertex to see the detail of each vertex. The following example provides two types of graph: a directed graph and an undirected graph.', 
      subtitle: 'Clickable Graph',
      codeBody: getCGControllerToString(),
      withDialog: true
    },
    {
      sectionId: 'config-vertex',
      description: 'We can easily config the vertex. The following example provides draggable vertices, non-clickable vertices, image vertices (with and without text), styled vertices, and vertices with onclick callback.',
      subtitle: 'Vertex Configuration',
      codeBody: getVCControllerToString(),
      withDialog: true
    }
  ]

  return (
    <div className='demo layout'>
      <Navbar options={[
        ['Home', '/', true],
        ['Clickable', '#clickable-graph', false],
        ['Vertex Configuration', '#config-vertex', false]
      ]} />
      {graphDemoProps.map(props => (
        <GraphDemo key={props.sectionId} sectionId={props.sectionId} description={props.description} subtitle={props.subtitle} codeBody={props.codeBody} withDialog={props.withDialog} />
      ))}
      
    </div>
  )
}

export default Demo;