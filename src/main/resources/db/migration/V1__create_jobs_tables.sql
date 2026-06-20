CREATE TABLE jobs(
  id UUID PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  requirements TEXT NOT NULL,
  location VARCHAR(255) NOT NULL,
  salary NUMERIC(12,2),
  status VARCHAR(20),
  created_at TIMESTAMP,
  update_at TIMESTAMP
);