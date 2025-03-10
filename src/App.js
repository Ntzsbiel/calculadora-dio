import MyInput from './Components/Input'
import MyButton from './Components/Button'
import { Container, Content, Row } from "./style";
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');

  const handleClear = ()=>{
    setCurrentNumber('0');
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${number}${prev === '0'? '': prev}`)
  }
  return (
    <Container >
      <Content>
        <MyInput value={currentNumber} />

        <Row>
          <MyButton label="x" onClick={() => handleAddNumber('')} />
          <MyButton label="/" onClick={() => handleAddNumber('')} />
          <MyButton label="C" onClick={() => handleClear()} />
          <MyButton label="X" onClick={() => handleAddNumber('')} />
        </Row>

        <Row>
          <MyButton label="7" onClick={() => handleAddNumber('7')} />
          <MyButton label="8" onClick={() => handleAddNumber('8')} />
          <MyButton label="9" onClick={() => handleAddNumber('9')} />
          <MyButton label="-" onClick={() => handleAddNumber('')} />
        </Row>

        <Row>
          <MyButton label="4" onClick={() => handleAddNumber('4')} />
          <MyButton label="5" onClick={() => handleAddNumber('5')} />
          <MyButton label="6" onClick={() => handleAddNumber('6')} />
          <MyButton label="+" onClick={() => handleAddNumber('+')} />
        </Row>

        <Row>
          <MyButton label="1" onClick={() => handleAddNumber('1')} />
          <MyButton label="2" onClick={() => handleAddNumber('2')} />
          <MyButton label="3" onClick={() => handleAddNumber('3')} />
          <MyButton label="=" onClick={() => handleAddNumber('=')} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
