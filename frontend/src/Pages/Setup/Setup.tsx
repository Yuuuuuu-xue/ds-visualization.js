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

  const data: SetupSectionData[] = [{
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
  {
    sectionId: 'setup-react',
    subtitle: 'React',
    codeDescription: [
      {
        description: `Add following lines in your React app ./public/index.hmtl <head></head> tag to include the compiled JavaScript
        library, stylesheets, and external modules such as jQuery and Less compiler.`,
        codeBody: `<link rel="stylesheet/less" type="text/css" href="./styles/main.less" />
<link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
  crossorigin="anonymous"
/>
<script src="https://cdn.jsdelivr.net/npm/less@4.1.1" ></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script type="text/javascript" src="./library/ds.js"></script>
        `,
      },
      {
        description: 'Then add the following line inside the <body></body> tag so we can use the library in our React app.',
        codeBody: `<script>
  $(document).ready(function() {
    window.ds = ds;
  });
</script>
        `
      },
      {
        description: 'If you are using React with JavaScript, then inside the App.js, we can use the library as follows:',
        codeBody: `function App() {
  const ds = (window as any).ds;
  const dsController = new ds.DataStructureController(800, 400);

  return (
    <div>
    </div>
  );
}
        `
      },
      {
        description: 'If you are using React with TypeScript, then inside the App.tsx, we can use the library as follows:',
        codeBody: `function App() {
  const ds = (window as any).ds;
  dsController = new ds.DataStructureController(800, 400);

  return (
    <div>
    </div>
  );
}
        `
      }
    ]
  },
]

  return (
    <div className='setup layout'>
      <Navbar options={[
        ['Home', '/', true],
        ['VanillaJS', '#setup-vanilla-js', false],
        ['React', '#setup-react', false]
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