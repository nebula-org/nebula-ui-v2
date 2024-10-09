import { usePrivy } from '@privy-io/react-auth';
import { LoginButton } from './components/login-button/LoginButton';
import { useNavigate } from 'react-router-dom';

function App() {
  const { ready, authenticated, user, login } = usePrivy();
  const navigate = useNavigate();

  if (ready && authenticated) {
    navigate("/home", { replace: true })
  }
  return (
    <div className="App">
      <LoginButton
        ready={ready}
        authenticated={authenticated}
        login={login}
      />
    </div>
  );
}

export default App;
