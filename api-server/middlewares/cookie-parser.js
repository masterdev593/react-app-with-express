import cookieParser from 'cookie-parser';

const cookieSecret = process.env.COOKIE_SECRET;
console.log('====================================');
console.log('+ cookieParser');
console.log('====================================');
export default cookieParser.bind(cookieParser, cookieSecret);
