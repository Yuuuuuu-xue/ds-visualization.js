import { Paper } from '@mui/material';
import { FC, ReactElement } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { solarizedLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CodeBlockData } from './CodeBlockData';


const DocumentationBlock: FC<CodeBlockData> = ({ header, description, codeBody, exampleCode }): ReactElement => {
  return (
    <div className='documentation-block'>
      {header ? 
        <h5 className='header'>
          {header}
        </h5>
        : null
      }
      {description ?
        <p className='description'>
          {description}
        </p>
        : null
      }
      {
        codeBody ? 
        <Paper className='code' elevation={3} sx={{padding: '1px 10px;', marginTop: '10px', marginBottom: '20px'}}> 
          <SyntaxHighlighter 
            language='typescript' 
            style={solarizedLight}
          >
            {codeBody}
          </SyntaxHighlighter>
        </Paper>
        : null
      }
      {
        exampleCode ? 
        <>
          <p className='description'>
            Example:
          </p>
          <Paper className='code' elevation={3} sx={{padding: '1px 10px;', marginTop: '10px', marginBottom: '20px'}}> 
            <SyntaxHighlighter
              language='typescript'
              style={solarizedLight}
            >
              {exampleCode}
            </SyntaxHighlighter>
          </Paper>
        </>
        : null
      }
    </div>
  )
};

export default DocumentationBlock;
