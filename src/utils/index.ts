import Post from './axios/Post';
import Get from './axios/Get';
import Patch from './axios/Patch';
import Delete from './axios/Delete';

import { FormatDate } from './formatDate';
import { dateSort } from './dateSort';

const Utils = { Post, Get, Patch, Delete, FormatDate, dateSort };
export default Utils;
export { Post, Get, Patch, Delete, FormatDate, dateSort };
