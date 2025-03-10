import MyInput from './Components/Input'
import MyButton from './Components/Button'
import { Container, Content } from "./style";

const App = () => {
  return (
    <Container >
      <Content>
        <MyInput/>
        <MyButton/>
      </Content>
    </Container>
  );
}

export default App;
