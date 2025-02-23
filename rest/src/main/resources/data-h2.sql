-- Enable MySQL mode for H2
SET MODE MySQL;


INSERT INTO addresses (
  id, version, date_created, time_created, last_updated, time_updated,
  description, owner, email, address, icon_url, block_explorer_url, nft_address
)
VALUES
  (1, 1, '2025-02-14 10:00:00', '2025-02-14 10:00:00', '2025-02-14 10:00:00', '2025-02-14 10:00:00',
   'Main wallet', 'Alice', 'alice@wallet.com', '0xAAA123...', 'https://icons.example.com/icon1.png', 'https://blockexplorer1.com', '0xabc123...'),
  (2, 1, '2025-02-14 11:00:00', '2025-02-14 11:00:00', '2025-02-14 11:00:00', '2025-02-14 11:00:00',
   'Backup wallet', 'Bob', 'bob@wallet.com', '0xBBB456...', 'https://icons.example.com/icon2.png', 'https://blockexplorer2.com', '0xdef456...'),
  (3, 1, '2025-02-14 12:00:00', '2025-02-14 12:00:00', '2025-02-14 12:00:00', '2025-02-14 12:00:00',
   'Test wallet', 'Charlie', 'charlie@wallet.com', '0xCCC789...', 'https://icons.example.com/icon3.png', 'https://blockexplorer3.com', '0xghi789...');

 INSERT INTO attribute (
  attrid, version, date_created, time_created, last_updated, time_updated,
  attribute_value, trait_type
)
VALUES
  (1, 1, '2025-02-14', '2025-02-14', '2025-02-14', '2025-02-14', 'Red', 'Color'),
  (2, 1, '2025-02-14', '2025-02-14', '2025-02-14', '2025-02-14', 'XL', 'Size'),
  (3, 1, '2025-02-14', '2025-02-14', '2025-02-14', '2025-02-14', 'Sparkly', 'Effect');

INSERT INTO categories (id, name, description)
VALUES
  (1, 'Tech', 'Technology news'),
  (2, 'Health', 'Health & wellness'),
  (3, 'Sports', 'Sports updates');

INSERT INTO nft_address_stamp (
  id, version, date_created, time_created, last_updated, time_updated,
  nft_address_stamp, native_token, nft_token
)
VALUES
  (1, 1, '2025-02-14 13:00:00', '2025-02-14 13:00:00', '2025-02-14 13:00:00', '2025-02-14 13:00:00',
   'StampOne', 10.5, 2.0),
  (2, 1, '2025-02-14 13:15:00', '2025-02-14 13:15:00', '2025-02-14 13:15:00', '2025-02-14 13:15:00',
   'StampTwo', 0.0, 100.0),
  (3, 1, '2025-02-14 13:30:00', '2025-02-14 13:30:00', '2025-02-14 13:30:00', '2025-02-14 13:30:00',
   'StampThree', 50.0, 50.0);


INSERT INTO roles (id, name)
VALUES
  (1, 'ROLE_ADMIN'),
  (2, 'ROLE_USER'),
  (3, 'ROLE_MANAGER');


INSERT INTO users (
  userid, username, `password`, lastname, firstname, usertype, email,
  organizationcode, cusurl, dashboardcode, isactive, contacttype
)
VALUES
  (1, 'alice', 'passAlice', 'Wonderland', 'Alice', 1, 'alice@example.com', 'ORG001', 'https://example.com/alice', 'DASH-1', 1, 101),
  (2, 'bob', 'passBob', 'Marley', 'Bob', 2, 'bob@example.com', 'ORG002', 'https://example.com/bob', 'DASH-2', 1, 102),
  (3, 'charlie', 'passCharlie', 'Brown', 'Charlie', 3, 'charlie@example.com', 'ORG003', 'https://example.com/charlie', 'DASH-3', 0, 103);

INSERT INTO users_roles (role_id, user_id)
VALUES
  (1, 1), -- 'alice' has ROLE_ADMIN
  (2, 1), -- 'bob' has ROLE_USER
  (3, 1); -- 'charlie' has ROLE_MANAGER


INSERT INTO weblinks (
  id, version, date_created, time_created, last_updated, time_updated,
  url, host, htmlpage, downloadstatus
)
VALUES
  (1, 1, '2025-02-14 14:00:00', '2025-02-14 14:00:00', '2025-02-14 14:00:00', '2025-02-14 14:00:00',
   'https://example.com', 'example.com', '<html>Page1</html>', 1),
  (2, 1, '2025-02-14 14:05:00', '2025-02-14 14:05:00', '2025-02-14 14:05:00', '2025-02-14 14:05:00',
   'https://foo.com', 'foo.com', '<html>Page2</html>', 0),
  (3, 1, '2025-02-14 14:10:00', '2025-02-14 14:10:00', '2025-02-14 14:10:00', '2025-02-14 14:10:00',
   'https://bar.com', 'bar.com', '<html>Page3</html>', 1);


INSERT INTO metadata (
  id, version, date_created, time_created, last_updated, time_updated,
  name, description, image, nft
)
VALUES
  (1, 1, '2025-02-14', '2025-02-14', '2025-02-14', '2025-02-14', 'MetaOne', 'DescriptionOne', 'https://images.example.com/meta1.png', 'NFT-One'),
  (2, 1, '2025-02-14', '2025-02-14', '2025-02-14', '2025-02-14', 'MetaTwo', 'DescriptionTwo', 'https://images.example.com/meta2.png', 'NFT-Two'),
  (3, 1, '2025-02-14', '2025-02-14', '2025-02-14', '2025-02-14', 'MetaThree', 'DescriptionThree', 'https://images.example.com/meta3.png', 'NFT-Three');

INSERT INTO chain (
  id, version, date_created, time_created, last_updated, time_updated,
  name, symbol, description, long_description, icon_url, category,
  chain_list_icon, rpc_url, chain_id, block_explorer_url, chain_address_id
)
VALUES
  (1, 1, '2025-02-14 15:00:00', '2025-02-14 15:00:00', '2025-02-14 15:00:00', '2025-02-14 15:00:00',
   'Ethereum', 'ETH', 'Ethereum mainnet', 'Extended info', 'https://icons.example.com/eth.png',
   'DeFi', 'https://icons.example.com/ethlist.png', 'https://rpc.eth.com', 1, 'https://explorer.eth.com', 1),
  (2, 1, '2025-02-14 15:05:00', '2025-02-14 15:05:00', '2025-02-14 15:05:00', '2025-02-14 15:05:00',
   'Polygon', 'MATIC', 'Polygon sidechain', 'Extended info2', 'https://icons.example.com/matic.png',
   'Layer2', 'https://icons.example.com/maticlist.png', 'https://rpc.matic.com', 137, 'https://explorer.matic.com', 2),
  (3, 1, '2025-02-14 15:10:00', '2025-02-14 15:10:00', '2025-02-14 15:10:00', '2025-02-14 15:10:00',
   'BSC', 'BNB', 'Binance Smart Chain', 'Extended info3', 'https://icons.example.com/bnb.png',
   'Exchange', 'https://icons.example.com/bnblist.png', 'https://rpc.bsc.com', 56, 'https://explorer.bsc.com', 3);

INSERT INTO news (id, title, url, category_id)
VALUES
  (1, 'AI Breakthrough', 'https://example.com/ai', 1),
  (2, 'Health Discovery', 'https://example.com/health', 2),
  (3, 'Championship Roundup', 'https://example.com/sports', 3);


INSERT INTO nft (
  id, version, date_created, time_created, last_updated, time_updated,
  name, amount, metadata, nft_address, nft_id
)
VALUES
  (1, 1, '2025-02-14 16:00:00', '2025-02-14 16:00:00', '2025-02-14 16:00:00', '2025-02-14 16:00:00',
   'NFT One', 10.0, 'MetaRefOne', '0xnft1', 1),
  (2, 1, '2025-02-14 16:05:00', '2025-02-14 16:05:00', '2025-02-14 16:05:00', '2025-02-14 16:05:00',
   'NFT Two', 20.5, 'MetaRefTwo', '0xnft2', 2),
  (3, 1, '2025-02-14 16:10:00', '2025-02-14 16:10:00', '2025-02-14 16:10:00', '2025-02-14 16:10:00',
   'NFT Three', 5.0, 'MetaRefThree', '0xnft3', 3);


INSERT INTO raw_token (
  id, version, date_created, time_created, last_updated, time_updated,
  raw_token, nftaddress_id
)
VALUES
  (1, 1, '2025-02-14 16:20:00', '2025-02-14 16:20:00', '2025-02-14 16:20:00', '2025-02-14 16:20:00',
   'RawOne', 1),
  (2, 1, '2025-02-14 16:25:00', '2025-02-14 16:25:00', '2025-02-14 16:25:00', '2025-02-14 16:25:00',
   'RawTwo', 2),
  (3, 1, '2025-02-14 16:30:00', '2025-02-14 16:30:00', '2025-02-14 16:30:00', '2025-02-14 16:30:00',
   'RawThree', 3);


INSERT INTO nft_address_stamp_nfts (nft_address_id, nfts_id)
VALUES
  (1, 1),
  (2, 2),
  (3, 3);
