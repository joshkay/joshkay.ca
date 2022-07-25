import { useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import NFTDisplay from 'components/crypto/NFTDisplay';
import { useMoralis, useMoralisWeb3Api, useMoralisWeb3ApiCall } from 'react-moralis';
import { ethers } from 'ethers';

const CryptoPage = () => 
{
  const ENS_DOMAIN = 'joshkay.eth';
  const Web3Api = useMoralisWeb3Api();
  const { fetch, data, error, isLoading } = useMoralisWeb3ApiCall(Web3Api.account.getNFTs, {
    chain: 'eth',
    address: '0x940408A4CeB9B4cbC2dF2db95a6d0fdD5AC56d84'
  });

  useEffect(() => {
    const loadCrypto = async () => {
      const provider = new ethers.providers.EtherscanProvider(null, process.env.ETHERSCAN_API_KEY);

      //const address = await web3.eth.ens.getAddress('joshkay.eth');
      const address = await provider.resolveName('joshkay.eth');
      
      console.log(address);

      fetch();
    }

    loadCrypto();
  }, [fetch]);

  return (
    <Flex>
      <NFTDisplay nfts={data} />
    </Flex>
  )
}

export default CryptoPage;