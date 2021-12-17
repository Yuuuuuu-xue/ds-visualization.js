import {FC, ReactElement, useEffect } from 'react';
import setTitle from '../../utils/setTitle';
import './Demo.scss';
import Navbar from '../../Components/Navbar';
import '../Layout.scss';
import { getCGController, getCGControllerToString } from './graph';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import GraphDemo from './GraphDemo';

interface Props {
  ds: any
}


const Demo: FC<Props> = ({ ds }): ReactElement => {

  const dsCGC = getCGController(ds);

  useEffect(() => {
    setTitle('Demo');
    const clickableGraphTarget = document.getElementById('clickable-graph-demo');
    if (clickableGraphTarget) {
      clickableGraphTarget.innerHTML = '';
      clickableGraphTarget.insertAdjacentElement('beforeend', dsCGC.getCanvasElement());
      clickableGraphTarget.insertAdjacentElement('beforeend', dsCGC.getDialogElement());
    }
  }, []);

  const graphDemoProps = [
    {
      sectionId: 'clickable-graph',
      description: 'A graph that you can click on each vertex to see the detail of each vertex. The following example provides two types of graph: a directed graph and an undirected graph.', 
      subtitle: 'Clickable Graph',
      title: 'Demo',
      codeBody: getCGControllerToString()
    }

  ]

  return (
    <div className='demo layout'>
      <Navbar options={[
        ['Home', '/'],
        ['Clickable', '#clickable-graph']
      ]} />
      {graphDemoProps.map(props => (
        <GraphDemo key={props.sectionId} sectionId={props.sectionId} description={props.description} subtitle={props.subtitle} title={props.title} codeBody={props.codeBody} />
      ))}
      
    </div>
  )
}

export default Demo;