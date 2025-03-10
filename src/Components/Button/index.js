import { ButtonContainer } from "./styles";

const MyButton = ({label, onClick}) => {
  return (
    <ButtonContainer onClick={onClick}>
      {label}
    </ButtonContainer>
  )
}


export default MyButton;