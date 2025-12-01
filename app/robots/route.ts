import { NextResponse } from 'next/server'

export const GET = () => {
  const body = `User-agent: *
Disallow:

Sitemap: https://www.thelayeredluxe.com/sitemap.xml
Sitemap: /sitemap.xml
`

  return new NextResponse(body, {
    status: 200,
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=0, must-revalidate'
    }
  })
}
