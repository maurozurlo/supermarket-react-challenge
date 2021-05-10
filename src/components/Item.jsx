import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as TrashIcon } from '../icons/delete-icon.svg'

const ItemComponent = styled.li`
  margin: 0.75em 0;
  width: 100%;
  background: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  font-weight: 600;
  border-radius: 0.3em;
  box-shadow: 0px 1px 5px 0px var(--grey-light);
  & p {
    margin: 0;
  }
  & button {
    border: none;
    background: transparent;
    & svg {
      width: 20px;
      :hover {
        cursor: pointer;
        filter: brightness(0.5);
      }
    }
  }
`

const Item = (props) => (
  <ItemComponent>
    <p>{props.itemName}</p>{' '}
    <button onClick={() => props.deleteItem(props.id)}>
      <TrashIcon />
    </button>
  </ItemComponent>
)

Item.propTypes = {
  itemName: PropTypes.string,
  deleteItem: PropTypes.func,
  id: PropTypes.number
}

export default Item
