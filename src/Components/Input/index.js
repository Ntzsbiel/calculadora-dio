import { InputContainer } from './styles';

const MyInput= ({value}) => {
  return (
    <InputContainer>
      <input disabled value={value}/>
    </InputContainer>
  )
}

export default MyInput;