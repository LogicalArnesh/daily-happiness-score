export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data = req.body;
    // Log the captured data (in production you might store this in a DB or just ignore)
    console.log('Captured data:', JSON.stringify(data, null, 2));

    // You can add storage here later (e.g. Vercel KV, database, etc.)
    // For now we just acknowledge receipt

    res.status(200).json({ success: true, message: 'Data captured' });
  } catch (error) {
    console.error('Error processing capture:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}