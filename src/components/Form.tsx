import React, { useState } from 'react'
import { AdressForm, ButtonPrimary, Main, OtherButton } from './style'
import { getCepApi } from '@/lib/axios'

interface AdressProps {
  logradouro: string
  bairro: string
  uf: string
  localidade: string
}


export default function Form(){

  const [userCep, setUserCep] = useState("")

  const [adress, setAdress] = useState<AdressProps>({} as AdressProps)

  async function handleSearchClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault()
    var adress = await getCepApi.get(`${userCep}/json/`)
    setAdress(adress.data)
    
  }

  return (
    <Main>
      <div>
        <input 
          type="text" name="cep" 
          placeholder="insira aqui o CEP"
          value={userCep}
          onChange={(event) => setUserCep(event.target.value)}
        />
      </div>

      <AdressForm>

        <ButtonPrimary onClick={(event) => handleSearchClick(event)}>
          Enviar
        </ButtonPrimary>

        <OtherButton>Limpar</OtherButton>

        <div>
          <label htmlFor="Logradouro">Logradouro</label>
          <input type="text" name="logradouro" value={adress.logradouro} />
        </div>
        <div>
          <label htmlFor="Bairro">Bairro</label>
          <input type="text" name="bairro" value={adress.bairro}/>
        </div>
        <div>
          <label htmlFor="Localidade">Localidade</label>
          <input type="text" name="localidade" value={adress.localidade}/>
        </div>
        <div>
          <label htmlFor="uf">uf</label>
          <input type="text" name="uf" value={adress.uf}/>
        </div>
      </AdressForm>
    </Main>
  )
}