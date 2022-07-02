import DrawerContainer from './HomeComponents/DrawerContainer'
import ProfileViewer from './HomeComponents/ProfileViewer'
import RecommendedUsers from './HomeComponents/RecommendedUsers'

function App() {
  return (
    <div className="App">
      <DrawerContainer />
      <ProfileViewer />
      <RecommendedUsers />
      <h1 className='welcome-user'>Welcome USER!</h1>
    </div>
  );
}

export default App;
