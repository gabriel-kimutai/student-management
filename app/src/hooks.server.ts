import PocketBase from 'pocketbase';
import { serializeNonPOJOs } from './lib/utils';
import type { Handle, RequestEvent } from '@sveltejs/kit';
import { page } from '$app/stores';


export const handle = (async ({ event, resolve }) => {
	const url = 'https://cloud-factory.pockethost.io';
	const localhost = 'http://127.0.0.1:8090';
	event.locals.pb = new PocketBase(localhost);

	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie')!);
	


	if (event.locals.pb.authStore.isValid) {
		event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model!);
	} else {
		event.locals.user = undefined;
	}


	const response = await resolve(event);
	response.headers.append('set-cookie', event.locals.pb.authStore.exportToCookie());

	return response;
}) satisfies Handle;
