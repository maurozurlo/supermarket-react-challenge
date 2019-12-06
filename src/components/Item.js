import styled from 'styled-components'
import React from 'react'
import trashIcon from '../icons/delete-icon.svg'

const ItemComponent = styled.li`
  margin: 0.750em 0;
  width: 100%;
  background: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  font-weight: 600;
  border-radius: .3em;
  box-shadow: 0px 1px 5px 0px var(--grey-light);
  & p{
    margin: 0;
  }
  & button{
    border: none;
    background: transparent;
    & img{
      width: 20px;
      :hover{
        cursor: pointer;
        filter: brightness(0.5);
      }
  }
}
`

const Item = (props) => (
  <ItemComponent>
    <p>{props.itemName}</p> <button onClick={() => props.deleteItem(props.id)}><img src={trashIcon} alt="delete" /></button>
  </ItemComponent>

)

export default Item