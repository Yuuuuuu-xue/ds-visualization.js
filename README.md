# DS.js

## Author
- Yuuuuuu-xue (Yu Xue)

## Landing page
https://ds-js-library-yu-xue.herokuapp.com/

## Documentation
https://ds-js-library-yu-xue.herokuapp.com/documentation

## Run the code locally
1. Clone the repo
2. Install all the dependencies
   ```
   npm i
   ```
3. Compile TypeScript code into JavaScript
   ```
   npm run build
   ```
4. Run the code
   ```
   npm run dev
   ```

## Alpha Release Production url
https://ds-library-yu-xue.herokuapp.com/

## Instruction and Alpha release
https://ds-library-yu-xue.herokuapp.com/views/examples.html

## Getting started
#### Vanilla JavaScript
Add following lines in your html head tag to include the compiled JavaScript library, stylesheets, and external modules such as jQuery and Less compiler.
```
<link rel="stylesheet/less" type="text/css" href="./path-to-the-file/main.less" />
<link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
  crossorigin="anonymous"
/>
<script defer src="https://cdn.jsdelivr.net/npm/less@4.1.1" ></script>
<script defer src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script defer type="text/javascript" src="./path-to-the-file/ds.js"></script>
```

Now, you can include an example.js file after those scripts. Then inside your example.js, you can start using the library:
```
$(document).ready(function() {
  const dsController = new ds.DataStructureController(800, 400);
});
```

#### React
Add following lines in your React app ./public/index.hmtl <head></head> tag to include the compiled JavaScript library, stylesheets, and external modules such as jQuery and Less compiler.
```
<link rel="stylesheet/less" type="text/css" href="./styles/main.less" />
<link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
  crossorigin="anonymous"
/>
<script src="https://cdn.jsdelivr.net/npm/less@4.1.1" ></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script type="text/javascript" src="./library/ds.js"></script>
```

Then add the following line inside the <body></body> tag so we can use the library in our React app.
```
<script>
  $(document).ready(function() {
    window.ds = ds;
  });
</script>
```

If you are using React with JavaScript, then inside the App.js, we can use the library as follows:
```
function App() {
  const ds = (window as any).ds;
  const dsController = new ds.DataStructureController(800, 400);

  return (
    <div>
    </div>
  );
}
```

If you are using React with TypeScript, then inside the App.tsx, we can use the library as follows:
```
function App() {
  const ds = (window as any).ds;
  dsController = new ds.DataStructureController(800, 400);

  return (
    <div>
    </div>
  );
}
```
