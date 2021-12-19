import {FC, ReactElement, useEffect } from 'react';
import setTitle from '../../utils/setTitle';
import './Demo.scss';
import Navbar from '../../Components/Navbar';
import '../Layout.scss';
import { getBController, getBControllerToString, getCGController, getCGControllerToString, getGCController, getGCControllerToString, getNVController, getNVControllerToString, getSPWController, getSPWControllerToString, getTAController, getTAControllerToString, getTGController, getTGControllerToString, getVCController, getVCControllerToString } from './graph';
import GraphDemo from '../../Components/GraphDemo';

interface Props {
  ds: any
}


const Demo: FC<Props> = ({ ds }): ReactElement => {

  const dsCGC = getCGController(ds);
  const dsVCC = getVCController(ds);
  const dsGCC = getGCController(ds);
  const dsTGC = getTGController(ds);
  const dsBC = getBController(ds);
  const dsTAC = getTAController(ds);
  const dsSPWC = getSPWController(ds);
  const dsNVC = getNVController(ds);

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
    insertDom(dsBC, false, document.getElementById('application-bilateral-demo'));
    insertDom(dsTAC, false, document.getElementById('application-traverse-demo'));
    insertDom(dsSPWC, true, document.getElementById('application-shortest-path-weight-demo'));
    insertDom(dsNVC, false, document.getElementById('application-network-visualization-demo'));
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

  const applicationDemo = [
    {
      sectionId: 'application-bilateral',
      subtitle: 'Is Bilaterial graph',
      description: 'Try to drag around vertices and determine if the following graph is bilaterial graph or not.',
      withDialog: false,
      codeBody: getBControllerToString()
    },
    {
      sectionId: 'application-traverse',
      subtitle: 'Traverse Graph Application',
      description: 'Following graphs are examples of Hamiltonian graph and Eulerian graph. Try to walk through the graph and vertify the claim.',
      codeBody: getTAControllerToString(),
      withDialog: false
    },
    {
      sectionId: 'application-shortest-path-weight',
      subtitle: 'Shortest Weight Path',
      description: 'Traverse the graph and find the shortest path weight from A to F.',
      codeBody: getSPWControllerToString(),
      withDialog: true
    },
    {
      sectionId: 'application-network-visualization',
      subtitle: 'Network Visualization',
      description: 'Visualize your network over a period of time. Click on any vertex to open their user profile.',
      codeBody: getNVControllerToString(),
      withDialog: false
    }
  ]

  return (
    <div className='demo layout'>
      <Navbar options={[
        ['Home', '/', true],
        ['Clickable', '#clickable-graph', false],
        ['Vertex Configuration', '#config-vertex', false],
        ['Graph Configuration', '#config-graph', false],
        ['Is Bilpartile Graph', '#application-bilateral', false],
        ['Graph Traverse', '#application-traverse', false],
        ['Shortest Path Weight', '#application-shortest-path-weight', false],
        ['Network Visualization', '#application-network-visualization', false]
      ]} />
      <p className='title'>
        Demo
      </p>
      {graphDemoProps.map(props => (
        <GraphDemo key={props.sectionId} sectionId={props.sectionId} description={props.description} codeBody={props.codeBody} subtitle={props.subtitle} withDialog={props.withDialog} />
      ))}
      <p className='title'>
        Application
      </p>
      {applicationDemo.map(a => (
        <GraphDemo key={a.sectionId} sectionId={a.sectionId} description={a.description} subtitle={a.subtitle} codeBody={a.codeBody} withDialog={a.withDialog} />
      ))}
    </div>
  )
}

export default Demo;