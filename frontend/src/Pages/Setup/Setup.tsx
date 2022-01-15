import {FC, ReactElement, useEffect } from 'react';
import setTitle from '../../utils/setTitle';
import './Setup.scss';
import Navbar from '../../Components/Navbar';
import { SetupSectionData } from '../../Components/SetupSectionPropsType';
import SetupSection from '../../Components/SetupSection';

interface Props {

}


const Setup: FC<Props> = (): ReactElement => {
  
  useEffect(() => {
    setTitle('Setup')
  }, []);

  const data: SetupSectionData[] = [
  {
    sectionId: 'setup-react',
    subtitle: 'React',
    codeDescription: [
      {
        description: `Install the package with npm`,
        codeBody: `npm i ds-visualization.js`,
      },
      {
        description: 'Import the library and have fun!',
        codeBody: `import { DataStructureController } from "ds-visualization.js";`
      },
    ]
  },
  {
    sectionId: 'setup-vanilla-js',
    subtitle: 'Vanilla JavaScript', 
    codeDescription: [
      {
        description: 'Download the library source file ds.js and style file main.css from',
        codeBody: 'https://github.com/Yuuuuuu-xue/ds-visualization.js/tree/main/src'
      },
      {
        description: `Add following lines in your html <head></head> tag to include the compiled JavaScript library, stylesheets, and external modules such as jQuery and Less compiler.`,
    codeBody: `<link rel="stylesheet" type="text/css" href="./main.css" />
<script defer type="text/javascript" src="./ds.js"></script>
<script defer type="text/javascript" src='./demo.js'></script>`,
      }
    ]
  },
]

  return (
    <div className='setup layout'>
      <Navbar options={[
        ['Home', '/', true],
        ['React', '#setup-react', false],
        ['VanillaJS', '#setup-vanilla-js', false]
      ]} />
      <div className='setup-wrapper'>
      <h1 className='title'>Quick Start</h1>
        {data.map(d => (
          <SetupSection key={d.sectionId} sectionId={d.sectionId} subtitle={d.subtitle} codeDescription={d.codeDescription} />
        ))}
      </div>

    </div>
  )
}

export default Setup;