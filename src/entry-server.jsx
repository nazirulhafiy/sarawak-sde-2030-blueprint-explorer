import { renderToString } from 'react-dom/server'

import Site from './Site.jsx'
import { NOT_FOUND_ROUTE, STATIC_ROUTES, resolveRoute } from './routes.js'
export { getStructuredData } from './seo.js'

export function getStaticRoutes() {
  return STATIC_ROUTES
}

export function getNotFoundRoute() {
  return NOT_FOUND_ROUTE
}

export function render(pathname = '/') {
  const route = resolveRoute(pathname)
  return renderToString(<Site route={route} />)
}

export function renderNotFound() {
  return renderToString(<Site route={NOT_FOUND_ROUTE} />)
}
