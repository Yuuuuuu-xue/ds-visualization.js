import { FC, ReactElement } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface Props {
  sectionId: string,
  description: string,
  subtitle: string,
  title: string,
  codeBody: string
};

const GraphDemo: FC<Props> = ({ sectionId, description, subtitle, title, codeBody }): ReactElement => {
  return (
    <>
    <h1 className='title'>{title}</h1>
    <section className='section' id={sectionId}>
      <h3 className='subtitle'>{subtitle}</h3>
      <p className='description'>
        {description}
      </p>
      <div id={`${sectionId}-demo`} className='graph'>
      </div>
      <p className='description'>
        Demo Code
      </p> 
      <div className='code'>
        <SyntaxHighlighter 
          language='javascript' 
          style={docco}
        >
          {codeBody}
        </SyntaxHighlighter>
      </div>
    </section>
    </>
  )
};

export default GraphDemo;