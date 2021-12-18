import { FC, ReactElement } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CodeBlockData } from './CodeBlockData';

const DocumentationBlock: FC<CodeBlockData> = ({ header, description, codeBody, exampleDescription, exampleCode }): ReactElement => {
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
        <div className='code'> 
          <SyntaxHighlighter 
            language='typescript' 
            style={docco}
          >
            {codeBody}
          </SyntaxHighlighter>
        </div>
        : null
      }
      { 
        exampleDescription ? 
        <p className='description'>
          {description}
        </p>
        : null
      }
      {
        exampleCode ? 
        <div className='code'>
          <SyntaxHighlighter
            language='typescript'
            style={docco}
          >
            {exampleCode}
          </SyntaxHighlighter>
        </div>
        : null
      }
    </div>
  )
};

export default DocumentationBlock;
