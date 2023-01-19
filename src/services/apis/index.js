import axios from 'axios';
import {URL} from '../../environment';

export const getData = async () => {
  return await axios.get (URL);
};
