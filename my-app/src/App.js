import React from 'react';
import TextCounter from './TextCounter';
import MyForm from './MyForm';
import MyForm2 from './MyForm2';


function App() {
  return (
   <div>
     <TextCounter limit={20}/>
     <MyForm/>
     <hr/>
     <MyForm2/>
   </div>
  );
}

export default App;
