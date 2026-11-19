import { PassThrough, Readable } from 'node:stream';

import { renderToPipeableStream } from 'react-dom/server';
import { ServerRouter } from 'react-router';
import type { EntryContext } from 'react-router';

// Build-time rendering must finish the router's data stream as well as its HTML.
// The resulting build is static; this handler is never deployed to Hosting.
export default function handleRequest(
  request: Request,
  responseStatus: number,
  headers: Headers,
  context: EntryContext
): Promise<Response> {
  return new Promise((resolve, reject) => {
    const body = new PassThrough();
    const stream = renderToPipeableStream(<ServerRouter context={context} url={request.url} />, {
      onAllReady() {
        headers.set('Content-Type', 'text/html; charset=utf-8');
        stream.pipe(body);
        resolve(
          new Response(Readable.toWeb(body) as ReadableStream<Uint8Array>, {
            status: responseStatus,
            headers,
          })
        );
      },
      onShellError: reject,
      onError(error) {
        responseStatus = 500;
        console.error(error);
      },
    });
    const timeout = setTimeout(() => stream.abort(), 10000);
    timeout.unref();
    body.on('end', () => clearTimeout(timeout));
  });
}
