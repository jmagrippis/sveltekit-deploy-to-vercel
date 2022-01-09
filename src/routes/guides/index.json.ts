import type {RequestHandler} from '@sveltejs/kit'

// GET /guides.json
export const get: RequestHandler = async () => {
	const relativePathsToContent = import.meta.globEager('./content/*.md')
	const guides = Object.entries(relativePathsToContent).map(
		([path, {attributes}]) => ({
			attributes,
			href: `/guides/${path.match(/\.\/content\/_(.+).md/)[1]}`,
		})
	)

	return {
		body: {guides},
	}
}
