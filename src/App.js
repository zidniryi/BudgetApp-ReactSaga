import { Container } from "semantic-ui-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'

import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";

import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import EntriyLines from "./components/EntriyLines";
import ModalEdit from "./components/ModalEdit";
import { getAllEntries } from './actions/entries.action';

function App() {

  const [totalIncome, setTotalIncome] = useState(0)
  const [totalExpense, setTotalExpense] = useState(0)
  const [total, setTotal] = useState(0)
  const [entry, setEntry] = useState()
  // Redux
  const entries = useSelector(state => state.entries)
  const { isOpen, id } = useSelector(state => state.modals)
  const dispatch = useDispatch()

  useEffect(() => {
    const index = entries.findIndex(entry => entry.id === id)
    setEntry(entries[index])
  }, [isOpen, id, entries])


  useEffect(() => {
    dispatch(getAllEntries())
  }, [])


  useEffect(() => {
    let totalIncomes = 0
    let totalExpeneses = 0
    entries.map(entry => {
      if (entry.isExpense) {
        return (totalExpeneses += Number(entry.value))
      }
      return (totalIncomes += Number(entry.value))

    })
    let total = totalIncomes - totalExpeneses
    setTotalExpense(totalExpeneses)
    setTotalIncome(totalIncomes)
    setTotal(total)
  }, [entries])

  return (
    <Container>
      <MainHeader title={"Budget"} />
      <DisplayBalance label={"Balance"} value={total} size="small" />
      <DisplayBalances totalIncome={totalIncome} totalExpense={totalExpense} />
      <MainHeader type="h3" title={"History"} />
      <EntriyLines
        entries={entries}
      />
      <MainHeader type="h3" title={"Add new Transactiion"} />
      <NewEntryForm />
      <ModalEdit
        isOpen={isOpen}
        {...entry}
      />
    </Container>
  );
}

export default App;

