import { Chakra, getServerSideProps } from 'Chakra';
import { useEffect } from 'react';
import { MoralisProvider, useMoralisWeb3Api } from 'react-moralis';

const MyApp = ({ Component, pageProps }) => 
{
  const Web3Api = useMoralisWeb3Api();
  const { fetch, data, error, isLoading } = useMoralisWeb3ApiCall(Web3API.account.getNFTs, {
    
  });

  useEffect(() => {
    fetch();
  }, [fetch]);

  console.log(data);

  return (
    <MoralisProvider
      appId={process.env.MORALIS_APP_ID}
      serverUrl={process.env.MORALIS_SERVER_URL}
    >
      <Chakra cookies={pageProps.cookies}>
        <Component {...pageProps} />
      </Chakra>
    </MoralisProvider>
  );
}

export { getServerSideProps };
export default MyApp;