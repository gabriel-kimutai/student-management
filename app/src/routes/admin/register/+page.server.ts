import type { Actions } from '@sveltejs/kit';

export const actions = {
  register: async ({ locals, request }) => {
    const data = await request.formData();
    const pass = data.get('password')
    data.append('passwordConfirm', pass)

    console.log(data)
    /* const send = {
      username: data.username,
      email: data.email,
      emailVisibility: true,
      password: data.password,
      passwordConfirm: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
      role: data.role
    }; */
    try {
      await locals.pb.collection('users').create(data);
    } catch (err: any) {
      console.error(JSON.stringify(err.response.data));
    }
  }
} satisfies Actions;
