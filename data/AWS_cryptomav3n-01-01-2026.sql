
-- COMMANDS 2----------------------------------
USE cryptomav3n;
SELECT * FROM cryptomav3n.addresses;
SELECT * FROM cryptomav3n.attribute;
SELECT * FROM cryptomav3n.chain;
SELECT * FROM cryptomav3n.roles;
SELECT * FROM cryptomav3n.coin;
SELECT * FROM cryptomav3n.metadata;
SELECT * FROM cryptomav3n.raw_token;
SELECT * FROM cryptomav3n.weblinks;
SELECT * FROM cryptomav3n.users;
 

CREATE SCHEMA IF NOT EXISTS cryptomav3n DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;

CREATE TABLE  IF NOT EXISTS  cryptomav3n.addresses
(
  id                 BIGINT AUTO_INCREMENT NOT NULL,
  version            INT                   NULL,
  date_created       datetime              NULL,
  time_created       datetime              NULL,
  last_updated       datetime              NULL,
  time_updated       datetime              NULL,
  `description`      VARCHAR(255)          NULL,
  owner              VARCHAR(255)          NULL,
  email              VARCHAR(255)          NULL,
  address            VARCHAR(255)          NULL,
  icon_url           VARCHAR(255)          NULL,
  block_explorer_url VARCHAR(255)          NULL,
  nft_address        VARCHAR(255)          NULL,
  user_userid        BIGINT                NULL,
  CONSTRAINT pk_addresses PRIMARY KEY (id)
);

CREATE TABLE   IF NOT EXISTS cryptomav3n.attribute
(
  attrid           BIGINT       NOT NULL,
  version          INT          NULL,
  date_created     datetime     NULL,
  time_created     datetime     NULL,
  last_updated     datetime     NULL,
  time_updated     datetime     NULL,
  attribute_value  VARCHAR(255) NULL,
  trait_type       VARCHAR(255) NULL,
  metadata_coin_id BIGINT       NULL,
  CONSTRAINT pk_attribute PRIMARY KEY (attrid)
);

CREATE TABLE  IF NOT EXISTS  cryptomav3n.chain
(
  id                 BIGINT AUTO_INCREMENT NOT NULL,
  version            INT                   NULL,
  date_created       datetime              NULL,
  time_created       datetime              NULL,
  last_updated       datetime              NULL,
  time_updated       datetime              NULL,
  name               VARCHAR(255)          NULL,
  symbol             VARCHAR(255)          NULL,
  `description`      VARCHAR(255)          NULL,
  long_description   VARCHAR(255)          NULL,
  icon_url           VARCHAR(255)          NULL,
  category           VARCHAR(255)          NULL,
  chain_list_icon    VARCHAR(255)          NULL,
  rpc_url            VARCHAR(255)          NULL,
  chain_id           INT                   NULL,
  block_explorer_url VARCHAR(255)          NULL,
  chain_address_id   BIGINT                NULL,
  CONSTRAINT pk_chain PRIMARY KEY (id)
);

CREATE TABLE  IF NOT EXISTS  cryptomav3n.coin
(
  id           BIGINT AUTO_INCREMENT NOT NULL,
  version      INT                   NULL,
  date_created datetime              NULL,
  time_created datetime              NULL,
  last_updated datetime              NULL,
  time_updated datetime              NULL,
  native_token DOUBLE                NULL,
  address_id   BIGINT                NULL,
  CONSTRAINT pk_coin PRIMARY KEY (id)
);

CREATE TABLE  IF NOT EXISTS  cryptomav3n.metadata
(
  id            BIGINT       NOT NULL,
  version       INT          NULL,
  date_created  datetime     NULL,
  time_created  datetime     NULL,
  last_updated  datetime     NULL,
  time_updated  datetime     NULL,
  name          VARCHAR(255) NULL,
  `description` VARCHAR(255) NULL,
  image         VARCHAR(255) NULL,
  external_url  VARCHAR(255) NULL,
  CONSTRAINT pk_metadata PRIMARY KEY (id)
);

CREATE TABLE  IF NOT EXISTS  cryptomav3n.nft
(
  id           BIGINT AUTO_INCREMENT NOT NULL,
  version      INT                   NULL,
  date_created datetime              NULL,
  time_created datetime              NULL,
  last_updated datetime              NULL,
  time_updated datetime              NULL,
  name         VARCHAR(255)          NULL,
  amount       DOUBLE                NOT NULL,
  metadata_id  BIGINT                NULL,
  coin_id      BIGINT                NULL,
  CONSTRAINT pk_nft PRIMARY KEY (id)
);

CREATE TABLE  IF NOT EXISTS  cryptomav3n.raw_token
(
  id           BIGINT AUTO_INCREMENT NOT NULL,
  version      INT                   NULL,
  date_created datetime              NULL,
  time_created datetime              NULL,
  last_updated datetime              NULL,
  time_updated datetime              NULL,
  raw_token    VARCHAR(255)          NULL,
  coin_id      BIGINT                NULL,
  CONSTRAINT pk_raw_token PRIMARY KEY (id)
);

CREATE TABLE  IF NOT EXISTS  cryptomav3n.roles
(
  id   BIGINT AUTO_INCREMENT NOT NULL,
  name VARCHAR(255)          NOT NULL,
  CONSTRAINT pk_roles PRIMARY KEY (id)
);

CREATE TABLE  IF NOT EXISTS  cryptomav3n.users
(
  userid           BIGINT AUTO_INCREMENT NOT NULL,
  username         VARCHAR(255)          NULL,
  password         VARCHAR(255)          NULL,
  lastname         VARCHAR(255)          NULL,
  firstname        VARCHAR(255)          NULL,
  usertype         INT                   NULL,
  email            VARCHAR(255)          NOT NULL,
  organizationcode VARCHAR(255)          NULL,
  cusurl           VARCHAR(255)          NULL,
  dashboardcode    VARCHAR(255)          NULL,
  isactive         INT                   NULL,
  contacttype      INT                   NULL,
  CONSTRAINT pk_users PRIMARY KEY (userid)
);

CREATE TABLE  IF NOT EXISTS  cryptomav3n.users_roles
(
  role_id BIGINT NOT NULL,
  user_id BIGINT NOT NULL,
  CONSTRAINT pk_users_roles PRIMARY KEY (role_id, user_id)
);

CREATE TABLE  IF NOT EXISTS  cryptomav3n.weblinks
(
  id               BIGINT AUTO_INCREMENT NOT NULL,
  version          INT                   NULL,
  date_created     datetime              NULL,
  time_created     datetime              NULL,
  last_updated     datetime              NULL,
  time_updated     datetime              NULL,
  url              VARCHAR(255)          NULL,
  host             VARCHAR(255)          NULL,
  htmlpage         VARCHAR(255)          NULL,
  downloadstatus   SMALLINT              NULL,
  shared_by_userid BIGINT                NULL,
  CONSTRAINT pk_weblinks PRIMARY KEY (id)
);

ALTER TABLE cryptomav3n.nft
  ADD CONSTRAINT uc_nft_metadata UNIQUE (metadata_id);

ALTER TABLE cryptomav3n.roles
  ADD CONSTRAINT uc_roles_name UNIQUE (name);

ALTER TABLE cryptomav3n.addresses
  ADD CONSTRAINT FK_ADDRESSES_ON_USER_USERID FOREIGN KEY (user_userid) REFERENCES users (userid);

ALTER TABLE cryptomav3n.attribute
  ADD CONSTRAINT FK_ATTRIBUTE_ON_METADATA_COIN FOREIGN KEY (metadata_coin_id) REFERENCES metadata (id);

ALTER TABLE cryptomav3n.chain
  ADD CONSTRAINT FK_CHAIN_ON_CHAIN_ADDRESS FOREIGN KEY (chain_address_id) REFERENCES addresses (id);

ALTER TABLE cryptomav3n.coin
  ADD CONSTRAINT FK_COIN_ON_ADDRESS FOREIGN KEY (address_id) REFERENCES addresses (id);

ALTER TABLE cryptomav3n.nft
  ADD CONSTRAINT FK_NFT_ON_COIN FOREIGN KEY (coin_id) REFERENCES coin (id);

ALTER TABLE cryptomav3n.nft
  ADD CONSTRAINT FK_NFT_ON_METADATA FOREIGN KEY (metadata_id) REFERENCES metadata (id);

ALTER TABLE cryptomav3n.raw_token
  ADD CONSTRAINT FK_RAW_TOKEN_ON_COIN FOREIGN KEY (coin_id) REFERENCES coin (id);

ALTER TABLE cryptomav3n.weblinks
  ADD CONSTRAINT FK_WEBLINKS_ON_SHARED_BY_USERID FOREIGN KEY (shared_by_userid) REFERENCES users (userid);

ALTER TABLE cryptomav3n.users_roles
  ADD CONSTRAINT fk_userol_on_role FOREIGN KEY (role_id) REFERENCES roles (id);

ALTER TABLE cryptomav3n.users_roles
  ADD CONSTRAINT fk_userol_on_user FOREIGN KEY (user_id) REFERENCES users (userid);
  
  
-- --------------

INSERT INTO cryptomav3n.roles (id, name)
VALUES
  (1, 'ROLE_ADMIN'),
  (2, 'ROLE_USER');


INSERT INTO cryptomav3n.users (
  userid, username, password, lastname, firstname, usertype, email,
  organizationcode, cusurl, dashboardcode, isactive, contacttype
)
VALUES
  (10, 'thomas1@gmail.com', '$2a$10$4IjU5vHSf/oB8yyU/vTN2evgS8r9HBksZ9Eq8Aq4LN2LqnrvFX9jC', 'Maestas', 'Thomas1', 0, 'thomas1@gmail.com',  'ORG1', 'https://s3.amazonaws.com/tmm.net/images/people/random_pf1', 'DASH1', 1, 101),
  (11, 'thomas2@gmail.com', '$2a$10$4IjU5vHSf/oB8yyU/vTN2evgS8r9HBksZ9Eq8Aq4LN2LqnrvFX9jC', 'Maestas', 'Thomas2', 1, 'thomas2@gmail.com',  'ORG2', 'https://s3.amazonaws.com/tmm.net/images/people/random_pf2', 'DASH2', 1, 102),
  (12, 'thomas3@gmail.com', '$2a$10$4IjU5vHSf/oB8yyU/vTN2evgS8r9HBksZ9Eq8Aq4LN2LqnrvFX9jC', 'Maestas', 'Thomas3', 2, 'thomas3@gmail.com',  'ORG3', 'https://s3.amazonaws.com/tmm.net/images/people/random_pf3', 'DASH3', 0, 103),
  (13, 'thomas4@gmail.com', '$2a$10$4IjU5vHSf/oB8yyU/vTN2evgS8r9HBksZ9Eq8Aq4LN2LqnrvFX9jC', 'Maestas', 'Thomas4', 3, 'thomas4@gmail.com',  'ORG4', 'https://s3.amazonaws.com/tmm.net/images/people/random_pf4', 'DASH4', 0, 104),
  (14, 'thomas5@gmail.com', '$2a$10$4IjU5vHSf/oB8yyU/vTN2evgS8r9HBksZ9Eq8Aq4LN2LqnrvFX9jC', 'Maestas', 'Thomas5', 3, 'thomas5@gmail.com',  'ORG5', 'https://s3.amazonaws.com/tmm.net/images/people/random_pf5', 'DASH5', 0, 105);


INSERT INTO cryptomav3n.users_roles (role_id, user_id)
VALUES
  (1, 10),  -- user #10 => ROLE_ADMIN
  (2, 11),  -- user #11 => ROLE_USER
  (1, 12),  -- user #12 => ROLE_ADMIN
  (2, 13),  -- user #13 => ROLE_USER
  (1, 14);  -- user #14 => ROLE_ADMIN


INSERT INTO cryptomav3n.addresses (
  id, version, date_created, time_created, last_updated, time_updated,
  description, owner, email, address, icon_url, block_explorer_url,
  nft_address, user_userid
)
VALUES
  (20, 1, '2025-04-01', '2025-04-01', '2025-04-01', '2025-04-01',
   'ETH: Ethereum', 'Thomas1@gmail.com', 'thomas1@gmail.com', '0xAAA111...',
   'https://s3.amazonaws.com/tmm.net/images/crypto/eth.png', 'https://etherscan.io', '0xAAA111...', 10),
  (21, 1, '2025-04-01', '2025-04-01', '2025-04-01', '2025-04-01',
   'BSC: Binance', 'Thomas2@gmail.com', 'thomas2@gmail.com', '0xBBB222...',
   'https://s3.amazonaws.com/tmm.net/images/crypto/bsc.png', 'https://bscscan.com', '0xBBB222...', 11),
  (22, 1, '2025-04-01', '2025-04-01', '2025-04-01', '2025-04-01',
   'MATIC: Polygon', 'Thomas3@gmail.com', 'thomas3@gmail.com', '0xCCC333...',
   'https://s3.amazonaws.com/tmm.net/images/crypto/matic.png', 'https://polygonscan.com', '0xCCC333...', 12),
  (23, 1, '2025-04-01', '2025-04-01', '2025-04-01', '2025-04-01',
   'AVAX: Avalanche', 'Thomas4@gmail.com', 'thomas4@gmail.com', '0xDDD444...',
   'https://s3.amazonaws.com/tmm.net/images/crypto/eth.png', 'https://snowtrace.io', '0xDDD444...', 13),
  (24, 1, '2025-04-01', '2025-04-01', '2025-04-01', '2025-04-01',
   'PLS: PulseChain', 'Thomas4@gmail.com', 'thomas4@gmail.com', '0xEEE555...',
   'https://s3.amazonaws.com/tmm.net/images/crypto/pls.png', 'https://scan.pulsechain.com', '0xEEE555...', 14);


INSERT INTO cryptomav3n.chain (
  id, version, date_created, time_created, last_updated, time_updated,
  name, symbol, description, long_description, icon_url, category,
  chain_list_icon, rpc_url, chain_id, block_explorer_url, chain_address_id
)
VALUES
  (30, 1, '2025-04-01', '2025-04-01', '2025-04-01', '2025-04-01',
   'Ethereum', 'ETH', 'Layer1', 'Mainnet', 'https://s3.amazonaws.com/tmm.net/images/crypto/eth.png',
   'DeFi', null, 'https://mainnet.ethereum.org', 1, 'https://etherscan.io', 20),
  (31, 1, '2025-04-01', '2025-04-01', '2025-04-01', '2025-04-01',
   'BSC', 'BNB', 'BinanceChain', 'Mainnet', 'https://s3.amazonaws.com/tmm.net/images/crypto/bsc.png',
   'DeFi', null, 'https://bsc-dataseed.binance.org', 56, 'https://bscscan.com', 21),
  (32, 1, '2025-04-01', '2025-04-01', '2025-04-01', '2025-04-01',
   'Polygon', 'MATIC', 'Sidechain', 'Mainnet', 'https://s3.amazonaws.com/tmm.net/images/crypto/matic.png',
   'DeFi', null, 'https://rpc-mainnet.maticvigil.com', 137, 'https://polygonscan.com', 22),
  (33, 1, '2025-04-01', '2025-04-01', '2025-04-01', '2025-04-01',
   'Avalanche', 'AVAX', 'C-Chain', 'Mainnet', 'https://s3.amazonaws.com/tmm.net/images/crypto/avax.png',
   'DeFi', null, 'https://api.avax.network', 43114, 'https://snowtrace.io', 23),
  (34, 1, '2025-04-01', '2025-04-01', '2025-04-01', '2025-04-01',
   'PulseChain', 'PLS', 'Fork of ETH', 'Mainnet', 'https://s3.amazonaws.com/tmm.net/images/crypto/pls.png',
   'DeFi', null, 'https://rpc.pulsechain.io', 369, 'https://scan.pulsechain.com', 24);

INSERT INTO cryptomav3n.coin (
  id, version, date_created, time_created, last_updated, time_updated,
  native_token, address_id
)
VALUES
  (40, 1, '2025-04-01', '2025-04-01', '2025-04-01', '2025-04-01',
   2.5, 20),
  (41, 1, '2025-04-01', '2025-04-01', '2025-04-01', '2025-04-01',
   0.1, 21),
  (42, 1, '2025-04-01', '2025-04-01', '2025-04-01', '2025-04-01',
   10.0, 22),
  (43, 1, '2025-04-01', '2025-04-01', '2025-04-01', '2025-04-01',
   0.05, 23),
  (44, 1, '2025-04-01', '2025-04-01', '2025-04-01', '2025-04-01',
   999.999, 24);


INSERT INTO cryptomav3n.metadata (
  id, version, date_created, time_created, last_updated, time_updated,
  name, description, image, external_url
)
VALUES
  (50, 1, '2025-04-01', '2025-04-01', '2025-04-01', '2025-04-01',
   'MetaOne', 'ancient science', 'https://s3.amazonaws.com/tmm.net/images/ancientscience.jpg', 'https://example.com/meta1'),
  (51, 1, '2025-04-01', '2025-04-01', '2025-04-01', '2025-04-01',
   'MetaTwo', 'Some aston martin ', 'https://s3.amazonaws.com/tmm.net/images/crypto/astonmartinwired.jpg', 'https://example.com/meta2'),
  (52, 1, '2025-04-01', '2025-04-01', '2025-04-01', '2025-04-01',
   'MetaThree', 'cryptocurrency metadata', 'https://s3.amazonaws.com/tmm.net/images/crypto/cryptocurrency.jpg', 'https://example.com/meta3'),
  (53, 1, '2025-04-01', '2025-04-01', '2025-04-01', '2025-04-01',
   'MetaFour', 'bitcoin_paper', 'https://s3.amazonaws.com/tmm.net/images/crypto/bitcoin_paper.png', 'https://example.com/meta4'),
  (54, 1, '2025-04-01', '2025-04-01', '2025-04-01', '2025-04-01',
   'MetaFive', '  huracan', 'https://s3.amazonaws.com/tmm.net/images/crypto/huracan.jpg', 'https://example.com/meta5');


INSERT INTO cryptomav3n.attribute (
  attrid, version, date_created, time_created, last_updated, time_updated,
  attribute_value, trait_type, metadata_coin_id
)
VALUES
  (60, 1, '2025-04-01', '2025-04-01', '2025-04-01', '2025-04-01',
   'Gold', 'Color', 50),
  (61, 1, '2025-04-01', '2025-04-01', '2025-04-01', '2025-04-01',
   'Sparkling', 'Effect', 51),
  (62, 1, '2025-04-01', '2025-04-01', '2025-04-01', '2025-04-01',
   'XL', 'Size', 52),
  (63, 1, '2025-04-01', '2025-04-01', '2025-04-01', '2025-04-01',
   'Diamond', 'Rarity', 53),
  (64, 1, '2025-04-01', '2025-04-01', '2025-04-01', '2025-04-01',
   'Holographic', 'Texture', 54);


INSERT INTO cryptomav3n.nft (
  id, version, date_created, time_created, last_updated, time_updated,
  name, amount, metadata_id, coin_id
)
VALUES
  (70, 1, '2025-04-01', '2025-04-01', '2025-04-01', '2025-04-01',
   'NFTOne', 1.0, 50, 40),
  (71, 1, '2025-04-01', '2025-04-01', '2025-04-01', '2025-04-01',
   'NFTTwo', 2.5, 51, 41),
  (72, 1, '2025-04-01', '2025-04-01', '2025-04-01', '2025-04-01',
   'NFTThree', 3.75, 52, 42),
  (73, 1, '2025-04-01', '2025-04-01', '2025-04-01', '2025-04-01',
   'NFTFour', 10.0, 53, 43),
  (74, 1, '2025-04-01', '2025-04-01', '2025-04-01', '2025-04-01',
   'NFTFive', 50.0, 54, 44);
 
INSERT INTO cryptomav3n.raw_token (
  id, version, date_created, time_created, last_updated, time_updated,
  raw_token, coin_id
)
VALUES
  (80, 1, '2025-04-01', '2025-04-01', '2025-04-01', '2025-04-01',
   'RawAlpha', 40),
  (81, 1, '2025-04-01', '2025-04-01', '2025-04-01', '2025-04-01',
   'RawBeta', 41),
  (82, 1, '2025-04-01', '2025-04-01', '2025-04-01', '2025-04-01',
   'RawGamma', 42),
  (83, 1, '2025-04-01', '2025-04-01', '2025-04-01', '2025-04-01',
   'RawDelta', 43),
  (84, 1, '2025-04-01', '2025-04-01', '2025-04-01', '2025-04-01',
   'RawEpsilon', 44);


INSERT INTO cryptomav3n.weblinks (
  id, version, date_created, time_created, last_updated, time_updated,
  url, host, htmlpage, downloadstatus, shared_by_userid
)
VALUES
  (90, 1, '2025-04-01', '2025-04-01', '2025-04-01', '2025-04-01',
   'https://thomasmaestas.com', 'thomasmaestas.com', '<html>thomasmaestas.com</html>', 1, 10),
  (91, 1, '2025-04-01', '2025-04-01', '2025-04-01', '2025-04-01',
   'https://thomasmaestas.net', 'thomasmaestas.net', '<html>  thomasmaestas</html>', 1, 11),
  (92, 1, '2025-04-01', '2025-04-01', '2025-04-01', '2025-04-01',
   'https://ourdailytech.net', 'ourdailytech.net', '<html>ourdailytech page</html>', 0, 12),
  (93, 1, '2025-04-01', '2025-04-01', '2025-04-01', '2025-04-01',
   'https://cryptomaven.xyz', 'cryptomaven.xyz', '<html>cryptomaven page</html>', 0, 13),
  (94, 1, '2025-04-01', '2025-04-01', '2025-04-01', '2025-04-01',
   'https://cryptomaven.xyz:9000', 'cryptomaven.xyz', '<html>cryptomaven page</html>', 1, 14);


  -- ----------------------------------------
  
  
--   
--   -- COMMANDS 2----------------------------------
SELECT * FROM cryptomav3n.addresses;
SELECT * FROM cryptomav3n.attribute;
SELECT * FROM cryptomav3n.chain;
SELECT * FROM cryptomav3n.roles;
SELECT * FROM cryptomav3n.coin;
SELECT * FROM cryptomav3n.metadata;
SELECT * FROM cryptomav3n.raw_token;
SELECT * FROM cryptomav3n.weblinks;
SELECT * FROM cryptomav3n.users;
SELECT * FROM cryptomav3n.raw_token;
