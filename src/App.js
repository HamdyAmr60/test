import './App.css';
import Card from './Component/Card';
import { data } from './Component/data';

function App() {


  const color = ["hsl(0, 100%, 67%)",
    "hsl(39, 100%, 56%)",
    "hsl(166, 100%, 37%)",
   "hsl(234, 85%, 45%)"]
  const showData = data.map((el , index) => <Card  icon = {el.icon} title = {el.category} grade = {el.score} style={{ color: color[index]}}/>)
  return showData;
}

export default App;
