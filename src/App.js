import { useState } from 'react';
import SAMPLE from './sample';
import './App.css';

import Editor from './Editor';
import Preview from './Preview';

export default function App() {
  const [state, setState] = useState(SAMPLE);
  
  return (
    <>
      <Editor state={state} setState={setState} />
      <Preview state={state}/>
    </>
  );
}