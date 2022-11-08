module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env("DATABASE_HOST", "5432"),
      database: env("DATABASE_HOST", "strapi"),
      user: env("DATABASE_HOST", "strapi"),
      password: env("DATABASE_HOST", "strapi"),
      ssl: false,
    },
    debug: false,
  },
});
