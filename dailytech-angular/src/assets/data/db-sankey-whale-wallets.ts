import whaleTokenWalletsJson from './whale-token-wallets.json';
import { SankeyGraph } from '../../app/model/Sankey';
import { TokenWalletDto } from '../../app/model/TokenWallet';
import { mapWalletDtoToWallet } from '../../app/utility/mappers/wallet.mapper';
import { mapTokenWalletsToSankey } from '../../app/utility/mappers/tokenWallet-sankey.mapper';

const whaleTokenWallets = (whaleTokenWalletsJson as unknown as TokenWalletDto[]).map(mapWalletDtoToWallet);

export const WHALE_WALLET_TOKEN_SANKEY: SankeyGraph = mapTokenWalletsToSankey(
  whaleTokenWallets,
  {
    minUsdValue: 1
  }
);
