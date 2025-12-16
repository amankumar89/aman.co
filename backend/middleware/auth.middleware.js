import jwt from "jsonwebtoken";

// JWT Auth Middleware
export const protect = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    let token;

    if (authHeader?.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
    } else if (req.cookies?.token) {
      token = req.cookies.token;
    }

    if (!token) {
      return res.status(401).json({ message: "Not Authorized!" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    return next();
  } catch (err) {
    return res.status(403).json({ message: "Not Authorized!" });
  }
};
