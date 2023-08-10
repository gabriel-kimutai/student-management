import { redirect } from '@sveltejs/kit';
import type { RequestEvent } from '../$types';

export const load = ({ locals, request }: { locals: any; request: RequestEvent }) => {
  const urlPath = request.url.pathname;
  if (locals.user.role != 'admin') {
    throw redirect(303, '/');
  }
  return;
};
