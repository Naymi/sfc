import passport from "passport"
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt"
import User from "../models/User.model"
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.APP_SECRET!,
    },
    async function ({ id }, done) {
      try {
        const user = await User.findOne({ where: { id } })
        if (user) {
          return done(null, user)
        } else {
          return done(null, false, { message: "Unauthorized" })
        }
      } catch (err) {
        return done(err, false)
      }
    },
  ),
)

export default passport
