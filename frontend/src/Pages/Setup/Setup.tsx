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
        description: `Add following lines in your html <head></head> tag to include the compiled JavaScript 
    library, stylesheets, and external modules such as jQuery and Less compiler.`,
    codeBody: `<link rel="stylesheet/less" type="text/css" href="./path-to-the-file/main.less" />
<link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
  crossorigin="anonymous"
/>
<script defer src="https://cdn.jsdelivr.net/npm/less@4.1.1" ></script>
<script defer src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script defer type="text/javascript" src="./path-to-the-file/ds.js"></script>`,
      }, 
      {
        description: 'Now, you can include an example.js file after those scripts. Then inside your example.js, you can start using the library:',
        codeBody: `$(document).ready(function() {
  const dsController = new ds.DataStructureController(800, 400);
});
  `
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