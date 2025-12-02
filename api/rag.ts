import type { VercelRequest, VercelResponse } from '@vercel/node';

const BACKEND_URL = 'http://127.0.0.1:8000/api/chat';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method Not Allowed' });
  }

  const { message } = request.body;

  if (!message) {
    return response.status(400).json({ error: 'Message is required' });
  }

  try {
    const backendResponse = await fetch(BACKEND_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }), // Forward the message to the backend
    });

    if (!backendResponse.ok) {
      const errorText = await backendResponse.text();
      return response.status(backendResponse.status).json({
        error: `Backend error: ${errorText}`,
      });
    }

    const data = await backendResponse.json();
    return response.status(200).json(data);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: 'Internal Server Error' });
  }
}
