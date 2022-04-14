import { Container } from "semantic-ui-react";
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";

import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import EntriyLines from "./components/EntriyLines";
import ModalEdit from "./components/ModalEdit";

function App() {
  // const [entries, setEntries] = useState(initialEntries);
  // new
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [editEntryId, setEditEntryId] = useState(null);
  const [totalIncome, setTotalIncome] = useState(0)
  const [totalExpense, setTotalExpense] = useState(0)
  const [total, setTotal] = useState(0)
  // Redux
  const entries = useSelector(state => state.entries)

  useEffect(() => {
    if (!isOpen && editEntryId) {
      const index = entries.findIndex(entry => entry.id === editEntryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      // setEntries(newEntries);
      resetEntry()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

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

  const editEntry = (id) => {
    if (id) {
      const index = entries.findIndex((entry) => entry.id === id);
      const entry = entries[index];
      setEditEntryId(id)
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  };

  const addEntry = () => {
    resetEntry()
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });
    // setEntries(result);
    resetEntry()
  };

  const resetEntry = () => {
    setDescription('')
    setValue('')
    setIsExpense(true)
  }

  return (
    <Container>
      <MainHeader title={"Budget"} />
      <DisplayBalance label={"Balance"} value={total} size="small" />
      <DisplayBalances totalIncome={totalIncome} totalExpense={totalExpense} />
      <MainHeader type="h3" title={"History"} />
      <EntriyLines
        entries={entries}
        editEntry={editEntry}
      />
      <MainHeader type="h3" title={"Add new Transactiion"} />
      <NewEntryForm
        addEntry={addEntry}
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addEntry={addEntry}
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />
    </Container>
  );
}

export default App;

var initialEntries = [
  {
    id: 1,
    description: "Income Work",
    value: 12,
    isExpense: false,
  },
  {
    id: 2,
    description: "Income Work 0",
    value: 13,
    isExpense: false,
  },
  {
    id: 3,
    description: "Income Work 1",
    value: 14,
    isExpense: false,
  },
  {
    id: 4,
    description: "Expenese Work",
    value: 10,
    isExpense: true,
  },
];
