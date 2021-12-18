import React, { FC, ReactElement } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { SetupSectionData } from './SetupSectionPropsType';


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
          <div className='code'>
            <SyntaxHighlighter
              language='html'
              style={docco}
            >
              {c.codeBody}
            </SyntaxHighlighter>
          </div>
        </React.Fragment>
      ))}
    </section> 
  )
};

export default SetupSection;