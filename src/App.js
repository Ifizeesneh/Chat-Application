import { ChatEngine } from 'react-chat-engine';
import ChatFeed from  './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;
  return(
             <ChatEngine 
                  height="100vh"
                  projectID="e57e9733-f923-488b-8563-05bf0858c8a1
                  "
                  
                  userName={localStorage.getItem('username')}
                  userSecret={localStorage.getItem('password')}
                  renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
                  onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}


                />


  );








}

export default App;
