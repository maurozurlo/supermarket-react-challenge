import styled from 'styled-components'
import React, { useState } from 'react'

const ModalContainer = styled.div`
  z-index: 999;
  position: absolute;
  min-width: 100%;
  min-height:100%;
  background: var(--overlay);
  display: flex;
  justify-content: center;`

const ModalCard = styled.div`
  z-index: 9999;
  background: var(--white);
  margin-top: 20vh;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 200px;
  padding: 0 24px;
  border-radius: 10px;
  box-shadow: 0px 1px 5px 0px var(--grey-light);

  & h2{
    text-align: center;
  }

  & input{
      border: 1px solid var(--grey-light);
      min-height: 40px;
      border-radius: 5px;
      margin-bottom: 24px;
      padding-left: 10px;
      font-size: 14px;
    }
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & button {
    font-weight: 600;
    border-radius: .3em;
    font-size: 16px;
    min-width: 90px;
    padding: 10px 0;
  }

  & button.outline{
    border: 1px solid var(--grey-mid);
    background-color: transparent;
    :hover{
      cursor: pointer;
      background: var(--grey);
    }
  }
  & button.primary{
    background-color: var(--blue-light);
    border: none;
    color: white;
    & :hover{
      background-color: var(--blue-light-2);
      cursor: pointer;
      color: var(--grey);
    }
  }

  & button:disabled,
  button[disabled]{
    border: 1px solid var(--grey-mid);
    background-color: var(--grey);
    color: var(--grey-mid);
  }
`



const Modal = (props) => {
  //Enable/disable button
  const [disabled, setDisabledState] = useState(true)
  const enableButton = () => setDisabledState(false)
  const disableButton = () => setDisabledState(true)
  //Input
  const handleInput = (e) => {
    setItemState(e.target.value)
    if (e.target.value !== '') {
      enableButton()
    } else {
      disableButton()
    }
  }
  const [itemValue, setItemState] = useState('')


  return (
    <ModalContainer>
      <ModalCard>
        <h2>Add Item</h2>
        <input type="text" value={itemValue} onChange={handleInput} autoFocus/>
        <ButtonContainer>
          <button className="outline" onClick={props.close} >Cancel</button>
          <button className="primary" disabled={disabled} onClick={() => props.addItemToList(itemValue)}>Add</button>
        </ButtonContainer>
      </ModalCard>
    </ModalContainer>
  )
}

export default Modal