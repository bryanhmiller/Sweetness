import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MediaPlayer from "react-native-media-player";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
