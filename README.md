# AestheticKlinik

Vue 3 frontend, Express API, and MySQL SQL database, orchestrated with Docker Compose.

## Start

1. Review `.env` and replace both database passwords with long random values.
2. Run `docker compose up --build`.
3. Open <http://localhost:5173>. API health is at <http://localhost:3000/api/health>.

`docker compose down` stops services. Database data persists in the `mysql_data` volume. `database/init.sql` initializes a fresh volume. Frontend variables prefixed with `VITE_` are public and must not contain secrets.
