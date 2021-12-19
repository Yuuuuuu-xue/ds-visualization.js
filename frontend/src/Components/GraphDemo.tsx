import { FC, ReactElement } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { solarizedLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Paper } from '@mui/material';

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
      {codeBody && 
      <Paper className='code' elevation={3} sx={{padding: '1px 10px;', marginTop: '10px', marginBottom: '20px'}}> 
        <SyntaxHighlighter 
          language='typescript' 
          style={ solarizedLight }
        >
          {codeBody}
        </SyntaxHighlighter>
      </Paper>}
    </section>
  )
};

export default GraphDemo;