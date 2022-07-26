CREATE USER cqrs_starter_user WITH PASSWORD '1q2w3e';
CREATE DATABASE cqrs_starter_user;
GRANT ALL PRIVILEGES ON DATABASE cqrs_starter_user to cqrs_starter_user;

CREATE TABLE IF NOT EXISTS service_user (
  user_id    SERIAL PRIMARY KEY,
  name       VARCHAR(255)                      DEFAULT NULL,
  nick_name  VARCHAR(255)                      DEFAULT NULL,
  status     CHAR(1)                           DEFAULT 'Y' NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE
);

CREATE USER cqrs_starter_account WITH PASSWORD '1q2w3e';
CREATE DATABASE cqrs_starter_account;
GRANT ALL PRIVILEGES ON DATABASE cqrs_starter_account to cqrs_starter_account;

CREATE TABLE IF NOT EXISTS service_account (
  account_id SERIAL PRIMARY KEY,
  name       VARCHAR(255)                      DEFAULT NULL,
  balance    integer                           DEFAULT 0 NOT NULL,
  user_id    INTEGER                  NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE
);

ALTER TABLE service_user OWNER TO cqrs_starter_user;
ALTER TABLE service_account OWNER TO cqrs_starter_account;
