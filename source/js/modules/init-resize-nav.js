import {resizeObserver} from '../vendor/observers.js';
import {setNavWidth} from './set-nav-width.js';

export const initNavModules = () => {
  setNavWidth();
  resizeObserver.subscribe(setNavWidth);
};
