import React, { useState, useEffect, Fragment } from 'react' 
import './App.css'

import styled from 'styled-components'
import Item from './components/Item'
import Modal from './components/Modal'
import {getAllListItems, addItemToList, deleteItemFromList} from './api'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--grey);
`
const ListContainer = styled.div`
  width: 90%;
  max-width: 650px;
  margin: 0 auto;
  margin-top: 2.8em;

& > button{
  width: 100%;
  background-color: var(--blue-light);
  color: white;
  font-weight: 600;
  border-radius: .3em;
  font-size: 16px;
  padding: 20px 20px;
  border: 1px solid var(--blue);
  margin-bottom: 2em;
    :hover{
    background-color: var(--blue-light-2);
    cursor: pointer;
    color: var(--grey);
    }
}
`

const ItemList = styled.ul`
list-style: none;
  margin: 0;
  padding: 0;
`


const App = () => {
  //Modal
  const [modalState, setModalState ] = useState(false)
  const closeModal = () => setModalState(false);
  const openModal = () => setModalState(true);

  //List handling
  const [list, setList] = useState([]);
  //Get all data
  async function fetchData() {
    try{
      const res = await getAllListItems()
      setList(res)
    } catch(err){
      console.log(err)
    }
  }
  //Initialize list
  useEffect(() => {
    fetchData()
  }, [])
  //Add item
  async function addItem(value){
    closeModal()
    try{
      await addItemToList(value)
      fetchData()
    } catch(err){
      console.log(err)
    }
  }
  //Delete item
  async function deleteItem(id) {
    try{
      await deleteItemFromList(id)
      fetchData()
    } catch(err){
      console.log(err)
    }
  }

  return (
    <Fragment>
      {modalState ? <Modal close={closeModal} addItemToList={addItem}></Modal> : null}
      <Container>
        <header>
          <h1>Supermarket List</h1>
          <small>{list.length} items</small>
        </header>
        <ListContainer>
          <ItemList >
            {list.map((item, i) => (
              <Item itemName={item} key={i} id={i} deleteItem={deleteItem}/>
            ))}
          </ItemList>
          <button onClick={openModal}>Add item</button>
        </ListContainer>
      </Container>
    </Fragment>
  )
}
export default App
