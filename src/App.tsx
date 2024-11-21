import PhoneInput from './components/PhoneInput';
import './App.css';
import Card from './components/Card';

function App() {

  return (
    <div className="app">
      <Card>
        <PhoneInput label='Phone Number'/>
      </Card>
    </div>
  )
}

export default App
