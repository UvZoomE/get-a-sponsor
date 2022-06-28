import DrawerContainer from './components/DrawerContainer'
import ProfileViewer from './components/ProfileViewer'

function App() {
  return (
    <div className="App">
      <DrawerContainer />
      <ProfileViewer />
      <h1 className='welcome-user'>Welcome USER!</h1>
    </div>
  );
}

export default App;
