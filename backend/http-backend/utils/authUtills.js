import jwt from "jsonwebtoken";

export function verifyToken(token) {
  if (!token) return null;

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET) ;
    return { id: data.id };
  } catch (err) {
    return null;
  }
}
