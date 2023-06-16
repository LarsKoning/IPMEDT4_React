import './App.css';
import GoalCard from './components/GoalCard';
import './styles/MonthSelect.css'
import MonthSelect from './components/MonthSelect';
import TopNavigationBar from './components/TopNavigationBar';
import BottomNavigationBar from './components/BottomNavigationBar'



function App() {
  return (
    <div className="App">
      <TopNavigationBar />
      <MonthSelect month={"Juni 2023"} />
      <GoalCard text={"Maand Doel"} amount1="150,00" amount2="200,00" />
      <BottomNavigationBar />
    </div>
  );
}

export default App;