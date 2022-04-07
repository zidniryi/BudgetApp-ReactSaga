import { Container } from "semantic-ui-react";
import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from './components/EntryLine';

import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";

function App() {
  return (
    <Container>
      <MainHeader title={"Budget"} />
      <DisplayBalance label={"Expenses"} value="990.1" size="small" />
      <DisplayBalances />
      <MainHeader type="h3" title={"History"} />
      <EntryLine description={"Income"} value="1233$" />
      <EntryLine description={"Expense"} value="233$" isExpense />
      <MainHeader type="h3" title={"Add new Transactiion"} />
      <NewEntryForm />
    </Container>
  );
}

export default App;
