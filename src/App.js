import MyInput from './Components/Input'
import MyButton from './Components/Button'
import { Container, Content, Row } from "./style";
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');

  const [firstNumber, setFirstNumber] = useState('0');

  const [operation, setOperation] = useState('');

  const handleClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)

  }

  const handleSumNumbers = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')

    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')

    }

  }

  const handleMinusNumbers = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')

    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')

    }

  }

  

  const handleEquals = () => {

    if (firstNumber != '0' && operation != '' && currentNumber != '0') {

      switch (operation) {

        case '+':
          handleSumNumbers();
          break;

        case '-':
          handleMinusNumbers();
          break;

        default:
          break;
      }

    }
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
          <MyButton label="-" onClick={handleMinusNumbers} />
        </Row>

        <Row>
          <MyButton label="4" onClick={() => handleAddNumber('4')} />
          <MyButton label="5" onClick={() => handleAddNumber('5')} />
          <MyButton label="6" onClick={() => handleAddNumber('6')} />
          <MyButton label="+" onClick={handleSumNumbers} />
        </Row>

        <Row>
          <MyButton label="1" onClick={() => handleAddNumber('1')} />
          <MyButton label="2" onClick={() => handleAddNumber('2')} />
          <MyButton label="3" onClick={() => handleAddNumber('3')} />
          <MyButton label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
