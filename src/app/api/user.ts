// pages/api/user.ts
import { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    // Retrieve user role from the cookie
    const userRoleCookie = req.headers.cookie && cookie.parse(req.headers.cookie).userRole;

    if (!userRoleCookie) {
      return res.status(401).json({ error: 'User role not found in the cookie' });
    }

    const userRole = userRoleCookie;

    res.status(200).json({ role: userRole });
  } else if (req.method === 'POST') {
 
    const userRole = req.body.role; 

    if (!userRole) {
      return res.status(400).json({ error: 'Role not provided in the request body' });
    }

    res.setHeader('Set-Cookie', cookie.serialize('userRole', userRole, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
    }));

    res.status(200).json({ message: 'Cookie set successfully' });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
