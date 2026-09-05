export const USERS: any = {
  10: {
    userId: 10,
    username: 'thomas1@gmail.com',
    firstName: 'Thomas1',
    lastName: 'Maestas',
    userType: 0,
    email: 'thomas1@gmail.com',
    organizationCode: 'ORG1',
    cusUrl: 'https://s3.amazonaws.com/tmm.net/images/people/random_pf1',
    dashboardCode: 'DASH1',
    isActive: 1,
    contactType: 101,
    addresses: [20]
  },
  11: {
    userId: 11,
    username: 'thomas2@gmail.com',
    firstName: 'Thomas2',
    lastName: 'Maestas',
    userType: 1,
    email: 'thomas2@gmail.com',
    organizationCode: 'ORG2',
    cusUrl: 'https://s3.amazonaws.com/tmm.net/images/people/random_pf2.png',
    dashboardCode: 'DASH2',
    isActive: 1,
    contactType: 102,
    addresses: [21]
  },
  12: {
    userId: 12,
    username: 'thomas3@gmail.com',
    firstName: 'Thomas3',
    lastName: 'Maestas',
    userType: 2,
    email: 'thomas3@gmail.com',
    organizationCode: 'ORG3',
    cusUrl: 'https://s3.amazonaws.com/tmm.net/images/people/random_pf3.png',
    dashboardCode: 'DASH3',
    isActive: 0,
    contactType: 103,
    addresses: [22]
  },
  13: {
    userId: 13,
    username: 'thomas4@gmail.com',
    firstName: 'Thomas4',
    lastName: 'Maestas',
    userType: 3,
    email: 'thomas4@gmail.com',
    organizationCode: 'ORG4',
    cusUrl: 'https://s3.amazonaws.com/tmm.net/images/people/random_pf4.png',
    dashboardCode: 'DASH4',
    isActive: 0,
    contactType: 104,
    addresses: [23]
  },
  14: {
    userId: 14,
    username: 'thomas5@gmail.com',
    firstName: 'Thomas5',
    lastName: 'Maestas',
    userType: 3,
    email: 'thomas5@gmail.com',
    organizationCode: 'ORG5',
    cusUrl: 'https://s3.amazonaws.com/tmm.net/images/people/random_pf5.png',
    dashboardCode: 'DASH5',
    isActive: 0,
    contactType: 105,
    addresses: [24]
  }
};

export const ADDRESSES: any = {
  20: {
    id: 20,
    description: 'ETH: Ethereum',
    owner: 'Thomas1@gmail.com',
    email: 'thomas1@gmail.com',
    address: '0xAAA111...',
    iconUrl: 'https://s3.amazonaws.com/tmm.net/images/crypto/eth.png',
    blockExplorerUrl: 'https://etherscan.io',
    chainPrimary: '0xAAA111...',
    chain: 'ETH',
    userId: 10,
    coins: [40],
    chains: [30]
  },
  21: {
    id: 21,
    description: 'BSC: Binance',
    owner: 'Thomas2@gmail.com',
    email: 'thomas2@gmail.com',
    address: '0xBBB222...',
    iconUrl: 'https://s3.amazonaws.com/tmm.net/images/crypto/bsc.png',
    blockExplorerUrl: 'https://bscscan.com',
    chainPrimary: '0xBBB222...',
    chain: 'BNB',
    userId: 11,
    coins: [41],
    chains: [31]
  },
  22: {
    id: 22,
    description: 'MATIC: Polygon',
    owner: 'Thomas3@gmail.com',
    email: 'thomas3@gmail.com',
    address: '0xCCC333...',
    iconUrl: 'https://s3.amazonaws.com/tmm.net/images/crypto/matic.png',
    blockExplorerUrl: 'https://polygonscan.com',
    chainPrimary: '0xCCC333...',
    chain: 'MATIC',
    userId: 12,
    coins: [42],
    chains: [32]
  },
  23: {
    id: 23,
    description: 'AVAX: Avalanche',
    owner: 'Thomas4@gmail.com',
    email: 'thomas4@gmail.com',
    address: '0xDDD444...',
    iconUrl: 'https://s3.amazonaws.com/tmm.net/images/crypto/eth.png',
    blockExplorerUrl: 'https://snowtrace.io',
    chainPrimary: '0xDDD444...',
    chain: 'AVAX',
    userId: 13,
    coins: [43],
    chains: [33]
  },
  24: {
    id: 24,
    description: 'PLS: PulseChain',
    owner: 'Thomas5@gmail.com',
    email: 'thomas5@gmail.com',
    address: '0xEEE555...',
    iconUrl: 'https://s3.amazonaws.com/tmm.net/images/crypto/pls.png',
    blockExplorerUrl: 'https://scan.pulsechain.com',
    chainPrimary: '0xEEE555...',
    chain: 'PLS',
    userId: 14,
    coins: [44],
    chains: [34]
  }
};

export const CHAINS: any = {
  30: {
    id: 30,
    name: 'Ethereum',
    symbol: 'ETH',
    type: 'Layer1',
    description: 'Layer1',
    longDescription: 'Mainnet',
    iconUrl: 'https://s3.amazonaws.com/tmm.net/images/crypto/eth.png',
    category: 'DeFi',
    rpcUrl: 'https://mainnet.ethereum.org',
    chainId: 1,
    blockExplorerUrl: 'https://etherscan.io',
    addressChain: 20,
    releaseDate: '2025-04-01'
  },
  31: {
    id: 31,
    name: 'BSC',
    symbol: 'BNB',
    type: 'Layer1',
    description: 'BinanceChain',
    longDescription: 'Mainnet',
    iconUrl: 'https://s3.amazonaws.com/tmm.net/images/crypto/bsc.png',
    category: 'DeFi',
    rpcUrl: 'https://bsc-dataseed.binance.org',
    chainId: 56,
    blockExplorerUrl: 'https://bscscan.com',
    addressChain: 21,
    releaseDate: '2025-04-01'
  },
  32: {
    id: 32,
    name: 'Polygon',
    symbol: 'MATIC',
    type: 'Sidechain',
    description: 'Sidechain',
    longDescription: 'Mainnet',
    iconUrl: 'https://s3.amazonaws.com/tmm.net/images/crypto/matic.png',
    category: 'DeFi',
    rpcUrl: 'https://rpc-mainnet.maticvigil.com',
    chainId: 137,
    blockExplorerUrl: 'https://polygonscan.com',
    addressChain: 22,
    releaseDate: '2025-04-01'
  },
  33: {
    id: 33,
    name: 'Avalanche',
    symbol: 'AVAX',
    type: 'C-Chain',
    description: 'C-Chain',
    longDescription: 'Mainnet',
    iconUrl: 'https://s3.amazonaws.com/tmm.net/images/crypto/avax.png',
    category: 'DeFi',
    rpcUrl: 'https://api.avax.network',
    chainId: 43114,
    blockExplorerUrl: 'https://snowtrace.io',
    addressChain: 23,
    releaseDate: '2025-04-01'
  },
  34: {
    id: 34,
    name: 'PulseChain',
    symbol: 'PLS',
    type: 'Fork of ETH',
    description: 'Fork of ETH',
    longDescription: 'Mainnet',
    iconUrl: 'https://s3.amazonaws.com/tmm.net/images/crypto/pls.png',
    category: 'DeFi',
    rpcUrl: 'https://rpc.pulsechain.io',
    chainId: 369,
    blockExplorerUrl: 'https://scan.pulsechain.com',
    addressChain: 24,
    releaseDate: '2025-04-01'
  }
};

export const COINS: any = {
  40: {
    id: 40,
    native: 2.5,
    tokens: ['50 USDC', '12 UNI'],
    nfts: [
      {
        name: 'NFTOne',
        amount: 1,
        metadata: {
          name: 'MetaOne',
          description: 'ancient science',
          image: 'https://s3.amazonaws.com/tmm.net/images/ancientscience.jpg',
          attributes: [
            { value: 'Gold', trait_type: 'Color' },
            { value: 'Sparkling', trait_type: 'Effect' }
          ]
        }
      }
    ],
    addressId: 20
  },
  41: {
    id: 41,
    native: 0.1,
    tokens: ['10 BUSD', '5 CAKE'],
    nfts: [
      {
        name: 'NFTTwo',
        amount: 2.5,
        metadata: {
          name: 'MetaTwo',
          description: 'aston martin',
          image: 'https://s3.amazonaws.com/tmm.net/images/crypto/astonmartinwired.jpg',
          attributes: [
            { value: 'Diamond', trait_type: 'Rarity' }
          ]
        }
      }
    ],
    addressId: 21
  },
  42: {
    id: 42,
    native: 10.0,
    tokens: ['69.54 MATIC', '35.11 BUSD'],
    nfts: [
      {
        name: 'NFTThree',
        amount: 3.75,
        metadata: {
          name: 'MetaThree',
          description: 'cryptocurrency metadata',
          image: 'https://s3.amazonaws.com/tmm.net/images/crypto/cryptocurrency.jpg',
          attributes: [
            { value: 'XL', trait_type: 'Size' }
          ]
        }
      }
    ],
    addressId: 22
  },
  43: {
    id: 43,
    native: 0.05,
    tokens: ['1.5 AVAX', '0.25 JOE'],
    nfts: [
      {
        name: 'NFTFour',
        amount: 10.0,
        metadata: {
          name: 'MetaFour',
          description: 'bitcoin paper',
          image: 'https://s3.amazonaws.com/tmm.net/images/crypto/bitcoin_paper.png',
          attributes: [
            { value: 'Holographic', trait_type: 'Texture' }
          ]
        }
      }
    ],
    addressId: 23
  },
  44: {
    id: 44,
    native: 999.999,
    tokens: ['55 HEX', '12 PLSX'],
    nfts: [
      {
        name: 'NFTFive',
        amount: 50.0,
        metadata: {
          name: 'MetaFive',
          description: 'huracan',
          image: 'https://s3.amazonaws.com/tmm.net/images/crypto/huracan.jpg',
          attributes: [
            { value: 'Holographic', trait_type: 'Texture' }
          ]
        }
      }
    ],
    addressId: 24
  }
};
