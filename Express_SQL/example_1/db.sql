CREATE DATABASE example_one;

USE example_one;

-- Drop dependent tables first to avoid foreign key conflicts during re-creation
DROP TABLE IF EXISTS city;
DROP TABLE IF EXISTS country;

-- Master table with basic information about countries
CREATE TABLE country (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  iso_code CHAR(3) NOT NULL UNIQUE,
  capital VARCHAR(100),
  population BIGINT UNSIGNED,
  area_km2 DECIMAL(12, 2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Child table storing cities that belong to a country
CREATE TABLE city (
  id INT AUTO_INCREMENT PRIMARY KEY,
  country_id INT NOT NULL,
  name VARCHAR(120) NOT NULL,
  population BIGINT UNSIGNED,
  is_capital TINYINT(1) DEFAULT 0,
  latitude DECIMAL(9, 6),
  longitude DECIMAL(9, 6),
  established_year SMALLINT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_city_country
    FOREIGN KEY (country_id)
    REFERENCES country (id)
    ON UPDATE CASCADE
    ON DELETE RESTRICT
) ENGINE=InnoDB;

-- Seed data for countries
INSERT INTO country (name, iso_code, capital, population, area_km2) VALUES
  ('Brazil', 'BRA', 'Brasília', 213993437, 8515767.00),
  ('United States', 'USA', 'Washington, D.C.', 331449281, 9833517.00),
  ('Canada', 'CAN', 'Ottawa', 38005238, 9984670.00),
  ('France', 'FRA', 'Paris', 67413000, 551695.00),
  ('Japan', 'JPN', 'Tokyo', 125360000, 377975.00);

-- Seed data for cities
INSERT INTO city (country_id, name, population, is_capital, latitude, longitude, established_year) VALUES
  (1, 'São Paulo', 12252023, 0, -23.550520, -46.633308, 1554),
  (1, 'Rio de Janeiro', 6748000, 0, -22.906847, -43.172897, 1565),
  (1, 'Brasília', 3055149, 1, -15.826691, -47.921822, 1960),
  (2, 'New York City', 8804190, 0, 40.712776, -74.005974, 1624),
  (2, 'Los Angeles', 3898747, 0, 34.052235, -118.243683, 1781),
  (2, 'Washington, D.C.', 689545, 1, 38.907192, -77.036873, 1790),
  (3, 'Toronto', 2731571, 0, 43.653226, -79.383184, 1793),
  (3, 'Vancouver', 662248, 0, 49.282729, -123.120738, 1886),
  (4, 'Paris', 2140526, 1, 48.856613, 2.352222, 508),
  (4, 'Lyon', 515695, 0, 45.764043, 4.835659, 43),
  (5, 'Tokyo', 13929286, 1, 35.689487, 139.691711, 1603),
  (5, 'Osaka', 2711534, 0, 34.693737, 135.502167, 653);
-- Ensure database exists before creating tables
CREATE DATABASE IF NOT EXISTS city_country
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE city_country;
