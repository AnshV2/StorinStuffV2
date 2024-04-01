import { createClient } from "@libsql/client";
import { DB_TOKEN } from '$env/static/private'
import { DB_LINK } from '$env/static/private'
import { redirect } from '@sveltejs/kit';

const client = createClient({
    url: DB_LINK,
    authToken: DB_TOKEN,
});

let user = "";

export async function load({ locals }) {
    user = locals.session.userId
	return {
		id: locals.session.userId
	};
}

export const actions = {
	default: async ({request}) => {
        const data = await request.formData()
        await client.execute({
            sql: "INSERT INTO stuff (name, username, password, user) VALUES (?, ?, ?, ?);",
            args: [data.get('Name'), data.get('Username'), data.get('Password'), user],
        });
        throw redirect(303, '/fun');
	}
};