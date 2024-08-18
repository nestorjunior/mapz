import { useState } from "react";
import { Input } from "../../components/Input";
import { LatLngExpression } from 'leaflet'
import { TileLayer, Marker } from 'react-leaflet'
import {
  Button,
  ButtonContainer,
  CategoryBox,
  CategoryContainer,
  CategoryImage,
  Container,
  Form,
  FormTitle,
  MapContainer,
  Section,
} from "./styles";
import { categories } from "./categories";

export function New() {

  const [formValues, setFormValues] = useState({
    name: '',
    description: '',
    contact: '',
    category: ''
  })

  console.log(formValues);

  return (
    <>
      <Container>
        <Form>
          <FormTitle>
            Cadastre seu mapa!
          </FormTitle>
          <Section>
            Dados
          </Section>
          <Input
            label="Localização para adicionar"
            name="name"
            value={formValues.name}
            onChange={setFormValues}
          />

          <Input
            label="Descrição"
            name="description"
            value={formValues.description}
            onChange={setFormValues}
          />

          <Input
            label="Contato"
            name="contact"
            value={formValues.contact}
            onChange={setFormValues}
          />
          <Section>
            Endereço
          </Section>
          <MapContainer center={{
            lat: 12,
            lng: 23
          } as LatLngExpression}
            zoom={13}
            whenCreated={() => { }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[12, 23] as LatLngExpression} />
          </MapContainer>
          <Section>
            Categorias
          </Section>
          <CategoryContainer>
            {categories.map((category) => (
              <CategoryBox
                key={category.key}
                onClick={() => {
                  setFormValues((prev) => ({ ...prev, category: category.key }))
                }}
                isActive={formValues.category === category.key}
              >
                <CategoryImage src={category.url} />
                {category.label}
              </CategoryBox>
            ))}
          </CategoryContainer>
          <ButtonContainer>
            <Button type="submit">Salvar</Button>
          </ButtonContainer>
        </Form>
      </Container>
    </>
  )
}