import React from 'react';
import TextCounter from './TextCounter';
import MyForm from './MyForm';


function App() {
  return (
   <div>
     <TextCounter limit={20}/>
     <MyForm/>
   </div>
  );
}

export default App;
