// Supplemental blockchain seed data derived from data-mysql.sql
// Structured as id-indexed maps, similar to db-data.ts

export const ROLES: any = {
  1: { id: 1, name: 'ROLE_ADMIN' },
  2: { id: 2, name: 'ROLE_USER' }
};

export const USERS_ROLES: any = {
  // role_id -> user_id
  1: { roleId: 1, userId: 10 },
  2: { roleId: 2, userId: 11 },
  3: { roleId: 1, userId: 12 },
  4: { roleId: 2, userId: 13 },
  5: { roleId: 1, userId: 14 }
};

export const METADATA: any = {
  50: {
    id: 50,
    name: 'MetaOne',
    description: 'ancient science',
    image: 'https://s3.amazonaws.com/tmm.net/images/ancientscience.jpg',
    external_url: 'https://example.com/meta1'
  },
  51: {
    id: 51,
    name: 'MetaTwo',
    description: 'Some aston martin ',
    image: 'https://s3.amazonaws.com/tmm.net/images/crypto/astonmartinwired.jpg',
    external_url: 'https://example.com/meta2'
  },
  52: {
    id: 52,
    name: 'MetaThree',
    description: 'cryptocurrency metadata',
    image: 'https://s3.amazonaws.com/tmm.net/images/crypto/cryptocurrency.jpg',
    external_url: 'https://example.com/meta3'
  },
  53: {
    id: 53,
    name: 'MetaFour',
    description: 'bitcoin_paper',
    image: 'https://s3.amazonaws.com/tmm.net/images/crypto/bitcoin_paper.png',
    external_url: 'https://example.com/meta4'
  },
  54: {
    id: 54,
    name: 'MetaFive',
    description: '  huracan',
    image: 'https://s3.amazonaws.com/tmm.net/images/crypto/huracan.jpg',
    external_url: 'https://example.com/meta5'
  }
};

export const ATTRIBUTES: any = {
  60: { attrId: 60, attribute_value: 'Gold', trait_type: 'Color', metadata_coin_id: 50 },
  61: { attrId: 61, attribute_value: 'Sparkling', trait_type: 'Effect', metadata_coin_id: 51 },
  62: { attrId: 62, attribute_value: 'XL', trait_type: 'Size', metadata_coin_id: 52 },
  63: { attrId: 63, attribute_value: 'Diamond', trait_type: 'Rarity', metadata_coin_id: 53 },
  64: { attrId: 64, attribute_value: 'Holographic', trait_type: 'Texture', metadata_coin_id: 54 }
};
  
export const WEBLINKS: any = {
  90: {
    id: 90,
    url: 'https://blog.ourdailytech.net',
    host: 'blog.ourdailytech.net',
    htmlpage: '<html>  blog ourdailytech</html>',
    downloadstatus: 1,
    shared_by_userid: 10
  },
  91: {
    id: 91,
    url: 'https://thomasmaestas.net',
    host: 'thomasmaestas.net',
    htmlpage: '<html>  thomasmaestas</html>',
    downloadstatus: 1,
    shared_by_userid: 11
  },
  92: {
    id: 92,
    url: 'https://ourdailytech.net',
    host: 'ourdailytech.net',
    htmlpage: '<html>ourdailytech page</html>',
    downloadstatus: 0,
    shared_by_userid: 12
  },
  93: {
    id: 93,
    url: 'https://cryptomaven.xyz',
    host: 'cryptomaven.xyz',
    htmlpage: '<html>cryptomaven page</html>',
    downloadstatus: 0,
    shared_by_userid: 13
  },
  94: {
    id: 94,
    url: 'https://blog.cryptomaven.xyz',
    host: 'cryptomaven.xyz',
    htmlpage: '<html>cryptomaven page</html>',
    downloadstatus: 1,
    shared_by_userid: 14
  }
};
