import { NextRequest, NextResponse } from 'next/server';

/**
 * Secure OpenPanel API Route Handler
 *
 * Proxies OpenPanel tracking requests server-side so the client secret stays private.
 */
const apiUrl = process.env.OPENPANEL_API_URL || process.env.NEXT_PUBLIC_OPENPANEL_API_URL || 'https://opapi.kriva.studio';

function getOpenPanelCredentials() {
  const enabled = process.env.NEXT_PUBLIC_OPENPANEL_ENABLED !== 'false';
  const clientId = process.env.OPENPANEL_CLIENT_ID || process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID;
  const clientSecret = process.env.OPENPANEL_CLIENT_SECRET;

  if (!enabled || !clientId || !clientSecret) {
    return null;
  }

  return { clientId, clientSecret };
}

export async function POST(req: NextRequest) {
  const credentials = getOpenPanelCredentials();
  if (!credentials) {
    return NextResponse.json({ error: 'OpenPanel is not configured' }, { status: 503 });
  }

  const { clientId, clientSecret } = credentials;

  try {
    let body;
    const contentType = req.headers.get('content-type') || '';

    if (contentType.includes('application/json')) {
      try {
        body = await req.json();
      } catch {
        const text = await req.text();
        body = text ? JSON.parse(text) : {};
      }
    } else {
      const text = await req.text();
      body = text ? JSON.parse(text) : {};
    }

    if (process.env.NODE_ENV === 'development') {
      console.log('📥 [OpenPanel API Route] Received request:', {
        bodyType: typeof body,
        hasBody: !!body,
        bodyKeys: body ? Object.keys(body) : [],
      });
    }

    const response = await fetch(`${apiUrl}/track`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'openpanel-client-id': clientId,
        'openpanel-client-secret': clientSecret,
      },
      body: JSON.stringify(body),
    });

    const responseText = await response.text();
    let data;

    try {
      data = responseText ? JSON.parse(responseText) : {};
    } catch {
      data = { error: 'Invalid response from OpenPanel API', raw: responseText };
    }

    if (process.env.NODE_ENV === 'development') {
      console.log('📤 [OpenPanel API Route] Response:', {
        status: response.status,
        success: response.ok,
      });
    }

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('❌ [OpenPanel API Route] Error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    route: '/api/openpanel',
    message: 'Use /api/openpanel/track for tracking requests',
  });
}
