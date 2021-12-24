import { randomBytes } from 'crypto';

import type { RequestHandler } from '@sveltejs/kit';
import supabase from '$lib/supabase';

interface PostSignUpRequest {
	email: string;
}

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
	// random temporary password
	const password = randomBytes(24).toString('hex');

	// TODO: check if user exists

	const { error } = await supabase.auth.signUp({
		email,
		password
	});

	if (error?.status === STATUS_CODE_INVALID_EMAIL) {
		return {
			status: 400,
			body: {
				message: `Something went wrong. Is '${email}' a valid email?`
			}
		};
	}

	if (error) {
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
