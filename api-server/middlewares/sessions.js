import session from 'express-session';
import MongoStoreFactory from 'connect-mongo';

const MongoStore = MongoStoreFactory(session);
const sessionSecret = process.env.SESSION_SECRET;
const url = process.env.MONGO_URL || process.env.MONGOHQ_URL;

export default function sessionsMiddleware() {
  console.log('====================================');
  console.log('+ sessionsMiddleware');
  console.log('====================================');
  return session({
    // 900 day session cookie
    cookie: { maxAge: 900 * 24 * 60 * 60 * 1000 },
    resave: true,
    saveUninitialized: true,
    secret: sessionSecret,
    store: new MongoStore({ url })
  });
}
