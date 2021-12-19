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
        <div className='code'> 
          <SyntaxHighlighter 
            language='typescript' 
            style={solarizedLight}
          >
            {codeBody}
          </SyntaxHighlighter>
        </div>
        : null
      }
      {
        exampleCode ? 
        <div className='code'>
          <p className='description'>
            Example:
          </p>
          <SyntaxHighlighter
            language='typescript'
            style={solarizedLight}
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
