import { randomBytes } from 'crypto';

import type { RequestHandler } from '@sveltejs/kit';
import { serverClient as supabase } from '$lib/supabase';

interface PostSignUpRequest {
	email: string;
}

const STATUS_CODE_ALREADY_REGISTERED = 400;
const STATUS_CODE_INVALID_EMAIL = 422;

export const post: RequestHandler<null, PostSignUpRequest> = async ({ body }) => {
	// validate request body
	const { email } = body;

	if (!email) {
		return {
			status: 400,
			body: {
				message: 'An email is required to sign up.'
			}
		};
	}

	const { data: signups } = await supabase.from('signups').select('*').match({ email });

	if (signups && signups.length !== 0) {
		return {
			body: {
				userExists: true
			}
		};
	}

	// random temporary password
	const password = randomBytes(24).toString('hex');
	const { error } = await supabase.auth.signUp({
		email,
		password
	});

	if (error?.status === STATUS_CODE_ALREADY_REGISTERED) {
		return {
			body: {
				userExists: true
			}
		};
	}

	if (error?.status === STATUS_CODE_INVALID_EMAIL) {
		return {
			status: 400,
			body: {
				message: `Something went wrong. Is '${email}' a valid email?`
			}
		};
	}

	if (error) {
		console.log('error signing up user', error);
		return {
			status: error.status,
			body: {
				message: 'Unknown error occurred. Please try again later.'
			}
		};
	}

	// defaults to 200 status code
	return {};
};
