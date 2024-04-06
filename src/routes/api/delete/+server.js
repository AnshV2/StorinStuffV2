import { error } from '@sveltejs/kit';
import { createClient } from "@libsql/client";
import { DB_TOKEN } from '$env/static/private'
import { DB_LINK } from '$env/static/private'

const client = createClient({
    url: DB_LINK,
    authToken: DB_TOKEN,
});



export async function DELETE({ request }) {
	const { id } = await request.json();
	client.execute({
        sql: "DELETE FROM stuff WHERE ID = ?;",
		args: [id]
	});

	return new Response(String(1));
}

export async function POST({ request }) {
	const { a, b } = await request.json();
	return json(a + b);
}