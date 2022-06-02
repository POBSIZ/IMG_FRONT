import axios from 'axios';
import Utils, { Get } from 'Utils';
import {
  GetCheckSessionPramType,
  GetCheckSessionResponseType,
  GetTestParamType,
  GetTestResponseType,
} from 'Types/testTypes';

// GET NAME API
export async function apiGetCheckSession(info: GetCheckSessionPramType) {
  const response = await Get<GetCheckSessionResponseType>(`/api/hello`);
  return response.data;
}

// GET TEST API
export const apiGetTest = async (id: GetTestParamType) => {
  const res = await Get<GetTestResponseType>(`/api/test`);
  return res.data;
};
