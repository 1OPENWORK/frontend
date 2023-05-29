import './App.css';
import JoinRoom from './JoinRoom';
import Room from './Room';
import './styles.css'
import { useHMSStore, selectIsConnectedToRoom } from '@100mslive/react-sdk';

function App() {
  
  const isConnected = useHMSStore(selectIsConnectedToRoom)

  return (
    <>
    <div className="App wrapper"
    style={{ display: 'flex', flexDirection: 'Column', gap: '40px'}}> 
    <h1 style={{ color: '#20AC69'}}>Video Conferência</h1>
      {isConnected
        ? <Room />
        : <JoinRoom />
      }
    </div>
    </>
  );
}

export default App;
