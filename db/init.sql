-- CREATE DATABASE IF NOT EXISTS emanueldb
SELECT 'CREATE DATABASE emanueldb'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'emanueldb')\gexec