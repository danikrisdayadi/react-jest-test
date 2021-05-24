import { useState } from 'react';
import './App.css';

function App() {
  const [ buttonColor, setButtonColor ] = useState('red');
  const [ disabled, setDisabled ] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue': 'red';

  return (
    <>
      <button disabled={disabled} style= {{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}>
        Change to {newButtonColor}
      </button>
      <input type="checkbox" onChange={ (e) => setDisabled(e.target.checked) }></input>
    </>
  );
}

export default App;
