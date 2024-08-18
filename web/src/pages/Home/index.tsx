import { CaretRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import {
  Button,
  ButtonBox,
  Container,
  LeftContainer,
  RightContainer,
  SubTitle,
  Title,
  Image
} from './styles'


export function Home() {
  return (
    <>
      <Container>
        <LeftContainer>
          <Title>O mapa local da sua cidade</Title>
          <SubTitle>Encontre tudo que precisa</SubTitle>
          <Link to="/new">
            <Button>
              Cadastre um novo mural
              <ButtonBox><CaretRight size={22} /></ButtonBox>
            </Button>
          </Link>
        </LeftContainer>
        <RightContainer>
          <Image />
        </RightContainer>
      </Container>
    </>
  )
}