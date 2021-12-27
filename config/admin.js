module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b7ebe0eb2e89be3aad16dc8e7b56b59b'),
  },
});
