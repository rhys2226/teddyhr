import axios from 'axios';

axios.defaults.baseURL = `${process.env.REACT_APP_SERVER_URL || 'http://localhost:8000'}/api`;
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';
