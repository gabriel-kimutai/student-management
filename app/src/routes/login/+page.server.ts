import { goto } from '$app/navigation';
import { redirect, type Actions } from '@sveltejs/kit';

export const actions = {
  login: async ({ locals, request }) => {
    const body = Object.fromEntries(await request.formData());

    try {
      (await locals.pb.collection('users').authWithPassword(body.username, body.password)) &&
        (await locals.pb.collection('users').authRefresh());
    } catch (err) {
      console.error(err);
    }

    const role = await locals.user.role;

    if (role == 'admin') {
      throw redirect(303, '/admin/dashboard');
    } else if (role == 'student') {
      throw redirect(303, `/student`);
    }
  }
} satisfies Actions;
