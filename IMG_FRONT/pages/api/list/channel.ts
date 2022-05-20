import type { NextApiRequest, NextApiResponse } from 'next';

const dummyData = (): any => {
  let _list: any = [];
  for (let index = 0; index < 100; index++) {
    _list.push({
      id: `${index}`,
      channelNum: index,
      channelName: `Title ${index}`,
      entryFee: index,
      users: [...Array(index)],
      pointPsum: index,
      hostId: index,
      limitOfParticipants: index,
    });
  }
  return _list;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  const resData = await dummyData();
  res.status(200).json(resData);
}
