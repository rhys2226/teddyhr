import { createContext } from 'react';
import { State } from './libraries/State';

export const StateContext = createContext({
	state: State.getInstance(),
});
