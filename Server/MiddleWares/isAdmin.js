import jwt from 'jsonwebtoken'

export const isAdminM = async (req,res,next) => {
    const token = req.cookies.accessToken;

    if(!token) return res.status(401).json({success:false,message:"You are not authed"})

    const isVerified = await jwt.verify(token,process.env.JWT_SECRET);
    
    if(!isVerified) return res.status(403).jspn({success:false,message:"You are not authorized"});

    req.userRole = isVerified.role;

    next()

}