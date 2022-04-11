module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4d7d1dad75fe100cccaaa91b48dcf93a'),
  },
});
