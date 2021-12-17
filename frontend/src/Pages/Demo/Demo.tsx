import {FC, ReactElement, useEffect } from 'react';
import setTitle from '../../utils/setTitle';
import './Demo.scss';
import Navbar from '../../Components/Navbar';
import '../Layout.scss';
import { getCGController, getCGControllerToString } from './graph';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

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

  return (
    <div className='demo layout'>
      <Navbar options={[
        ['Home', '/'],
        ['Clickable', '#clickable-graph']
      ]} />
      <h1 className='title'>Demo</h1>
      <section className='section' id='clickable-graph'>
        <h3 className='subtitle'>Clickable Graph</h3>
        <p className='description'>
          A graph that you can click on each vertex to see the detail of each vertex. The following example provides two types of graph: a directed graph and an undirected graph.
        </p>
        <div id='clickable-graph-demo' className='graph'>
        </div>
        <p className='description'>
          Demo Code
        </p> 
        <div className='code'>
          <SyntaxHighlighter 
            language='javascript' 
            style={docco}
          >
            {getCGControllerToString()}
          </SyntaxHighlighter>
        </div>
      </section>
      
    </div>
  )
}

export default Demo;