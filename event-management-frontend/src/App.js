import logo from './logo.svg';
import './App.css';
import EventForm from "./components/EventForm/EventForm";

function App() {
  return (
      <div>
        <h1 className="text-center text-3xl font-bold p-8">Event Management System</h1>
        <EventForm/>
      </div>
  );
}

export default App;
