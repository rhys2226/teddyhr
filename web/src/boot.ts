import axios from 'axios';
import { State } from './libraries/State';

axios.defaults.baseURL = `${process.env.REACT_APP_SERVER_URL}/api`;
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';
