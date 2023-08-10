import { serializeNonPOJOs } from '$lib/utils';
import type { Record } from 'pocketbase';

export const load = async ({ locals }: { locals: any }) => {
  let userList;
  try {
    userList = serializeNonPOJOs(await locals.pb.collection('users').getList(1, 10));
  } catch (err) {
    console.error(err);
  }

  let studentNums: number = 0;
  let adminNum: number = 0;
  for (let i = 0; i < userList.items.length; i++) {
    if (userList.items[i].role == 'student') {
      studentNums++;
    } else if (userList.items[i].role == 'admin') {
      adminNum++;
    }
  }

  return {
    userList: userList.items,
    studentNums: studentNums,
    adminNum: adminNum
  };
};
