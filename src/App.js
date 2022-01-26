import './App.css';
import CompBtn from './CompBtn';
import CompEnable from './CompEnable';
import CompHide from './CompHide';
import CompInput1 from './CompInput1';
import CompOne from './CompOne';
import CompROI from './CompROI';
import CompTier from './CompTier';
import CompTimeframe from './CompTimeframe';
import Heading from './Heading';

function App() {
  return (
    <>
      <div className='body'>
        <Heading/>
        <CompOne/>
        <CompInput1/>
        <CompBtn/>
        <CompTimeframe/>
        <CompEnable/>
        <CompTier/>
        <CompROI/>
        <CompHide/>         
      </div>
    </>
  
  );
}

export default App;
