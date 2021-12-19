import React, { FC, ReactElement } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { solarizedLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { SetupSectionData } from './SetupSectionPropsType';
import { Paper } from '@mui/material';


const SetupSection: FC<SetupSectionData> = ({ sectionId, subtitle, codeDescription }): ReactElement => {
  return (
    <section id={sectionId}>
      <h3 className='subtitle'>
        {subtitle}
      </h3>
      {codeDescription.map(c => (
        <React.Fragment key={c.description}>
          <p className='description'>
            {c.description}
          </p>
          <Paper className='code' elevation={3} sx={{padding: '1px 10px;', marginTop: '10px', marginBottom: '20px'}}> 
            <SyntaxHighlighter
              language='html'
              style={solarizedLight}
            >
              {c.codeBody}
            </SyntaxHighlighter>
          </Paper>
        </React.Fragment>
      ))}
    </section> 
  )
};

export default SetupSection;