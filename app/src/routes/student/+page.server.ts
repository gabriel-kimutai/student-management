export const load = async ({ locals }: { locals: any }) => {
  try {
    const studentData = await locals.pb.collection('users').getOne(locals.user.id, {
    });
    const info = await locals.pb.collection('studentInfo').getOne(studentData.info)
    console.log(studentData);
    console.log(info);
  } catch (err) { 
    console.error('Error: ', err)
  }
};
