import { FC, ReactElement } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface Props {
  sectionId: string,
  description: string,
  subtitle: string,
  codeBody?: string,
  withDialog: boolean
};

const GraphDemo: FC<Props> = ({ sectionId, description, subtitle, codeBody, withDialog }): ReactElement => {
  return (
    <section className='section' id={sectionId}>
      <h3 className='subtitle'>{subtitle}</h3>
      <p className='description'>
        {description}
      </p>
      <div id={`${sectionId}-demo`} className={`graph ${withDialog === true ? 'with-dialog' : ''}`}>
      </div>
      <p className='description'>
        Demo Code:
      </p> 
      {codeBody && <div className='code'>
        <SyntaxHighlighter 
          language='typescript' 
          style={docco}
        >
          {codeBody}
        </SyntaxHighlighter>
      </div>}
    </section>
  )
};

export default GraphDemo;