
import './App.css';
import { useEffect, useState } from 'react';
import TripList from './component/TripList';

function App() {

  const [trips, setTrips] = useState([])

useEffect(() => {
  fetch('http://localhost:9000/trips')
  .then(res =>{
    return res.json()
  })
  .then((data) => {
    setTrips(data)
  
  })
},[])

  return (

      <div>
       <TripList trips = {trips}/>
      </div>
      
  );
}

export default App;
