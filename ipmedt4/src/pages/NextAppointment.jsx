import '../App.css';
import '../styles/MonthSelect.css'
import Header from '../components/Header';
import Renter from '../components/Renter';
import ProfileCard from '../components/ProfileCard'
import '../styles/Profile.css'
import Discription from '../components/Discription';




function App() {

  return (
    <div>
      <Header text="Overzicht" />
      <ProfileCard naam="Conscious Carl" email={"Carl@gmail.com"} beoordeling={"positief"} />
      <Renter title={"Moment van de afspraak"} begintijd={"12:00"} eindtijd={"16:00"} startdatum={"20-06-2023"} einddatum={"20-06-2023"} />
      <Discription model={"OPEL Corsa"} kenteken={"12-34-AB"} vrijekm={"100 KM"} />
      <section id='buttonContainer'>
        <button id='DMButton'>
          Stuur een bericht
        </button>
      </section>
    </div>
  );
}

export default App;