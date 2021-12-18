import { FC, ReactElement } from 'react';
import { CodeBlockData } from './CodeBlockData';
import DocumentationBlock from './DocumentationBlock';



interface Props { 
  sectionId: string
  subtitle: string,
  codeData: CodeBlockData[]
};

const DocumentSection: FC<Props> = ({ sectionId, subtitle, codeData }): ReactElement => {
  return (
    <section className='section' id={sectionId}>
      <h3 className='subtitle'>{subtitle}</h3> 
      {codeData.map(c => (
        <DocumentationBlock key={c.header} description={c.description} header={c.header} codeBody={c.codeBody} exampleDescription={c.exampleDescription} exampleCode={c.exampleCode} />
      ))}
    </section>
  );
}

export default DocumentSection;
