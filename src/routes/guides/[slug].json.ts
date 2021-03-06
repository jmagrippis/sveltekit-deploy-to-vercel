import type { RequestHandler } from '@sveltejs/kit'

// GET /guides/:slug.json
export const get: RequestHandler<{ slug: string }> = async ({
	params: { slug },
}) => {
	try {
		return { body: await import(`./content/_${slug}.md`) }
	} catch (error) {
		return {
			status: 404,
			body: { error: `Could not find guide for ${slug}` },
		}
	}
}
