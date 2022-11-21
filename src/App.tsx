import { useState } from 'react';
import Display from './components/Display/Display';
import Manipulator from './components/Manipulator/Manipulator';

function App() {
  const [count, setCount] = useState<number>(0);

  //const propToPassDown = 5;

  return (
    <div className='App'>
      <Display count={count} />
      <Manipulator setCount={setCount} />
    </div>
  );
}

export default App;
