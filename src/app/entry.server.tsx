import { renderToString } from 'react-dom/server';
import { ServerRouter } from 'react-router';
import type { EntryContext } from 'react-router';

// Used by the build to render static documents; no server is deployed.
export default function handleRequest(
  request: Request,
  status: number,
  headers: Headers,
  context: EntryContext
) {
  headers.set('Content-Type', 'text/html; charset=utf-8');
  return new Response(
    '<!DOCTYPE html>' + renderToString(<ServerRouter context={context} url={request.url} />),
    { status, headers }
  );
}
