import { Chakra, getServerSideProps } from 'Chakra';

const MyApp = ({ Component, pageProps }) => 
{
  return (
    <Chakra cookies={pageProps.cookies}>
      <Component {...pageProps} />
    </Chakra>
  );
}

export { getServerSideProps };
export default MyApp;