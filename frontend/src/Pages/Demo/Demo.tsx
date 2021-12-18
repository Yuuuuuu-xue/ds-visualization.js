import {FC, ReactElement, useEffect } from 'react';
import setTitle from '../../utils/setTitle';
import './Demo.scss';
import Navbar from '../../Components/Navbar';
import '../Layout.scss';
import { getCGController, getCGControllerToString, getGCController, getGCControllerToString, getTGController, getTGControllerToString, getVCController, getVCControllerToString } from './graph';
import GraphDemo from '../../Components/GraphDemo';

interface Props {
  ds: any
}


const Demo: FC<Props> = ({ ds }): ReactElement => {

  const dsCGC = getCGController(ds);
  const dsVCC = getVCController(ds);
  const dsGCC = getGCController(ds);
  const dsTGC = getTGController(ds);

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
    insertDom(dsGCC, true, document.getElementById('config-graph-demo'));
    insertDom(dsTGC, true, document.getElementById('traversable-graph-demo'));
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
    },
    {
      sectionId: 'config-graph',
      subtitle: 'Graph Configuration',
      description: `In addition, we can also easily config the graph. The following example provides three graphs with differnt modes. A graph with mode 'traversable' means 
        user can click the vertices to walk through the graph. A graph with mode 'clickable' means user can click any vertex to see their info (i.e. in-neighbours and out-neighbours). This 
        is the default mode. A graph with mode 'non-clickable' means that user cannot click on any vertices.
      `,
      codeBody: getGCControllerToString(),
      withDialog: true
    },
    {
      sectionId: 'traversable-graph',
      subtitle: 'Traversable Graph',
      description: `When graph mode is set to 'traversable', then we can also config additional fields. In the following example, we have four graphs. For the first graph,
      we can traverse the vertices and edges any times we want and we disable the weight so we cannot see the weight for each edge. For the second graph, we can
      traverse the graph but cannot repeat any vertices with enabled weight. For the third graph, we can traverse the graph but cannot repeat any edges with enabled
      weight. For the last graph, we can traverse the graph but cannot repeat any vertices and any edges with enabled weight.
      `,
      codeBody: getTGControllerToString(),
      withDialog: true
    }
  ]

  return (
    <div className='demo layout'>
      <Navbar options={[
        ['Home', '/', true],
        ['Clickable', '#clickable-graph', false],
        ['Vertex Configuration', '#config-vertex', false],
        ['Graph Configuration', '#config-graph', false]
      ]} />
      <p className='title'>
        Demo
      </p>
      {graphDemoProps.map(props => (
        <GraphDemo key={props.sectionId} sectionId={props.sectionId} description={props.description} subtitle={props.subtitle} codeBody={props.codeBody} withDialog={props.withDialog} />
      ))}
      
    </div>
  )
}

export default Demo;