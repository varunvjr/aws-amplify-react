import Amplify from 'aws-amplify';
import './App.css';
import awsconfig from './aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react-v1'

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <AmplifySignOut/>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
