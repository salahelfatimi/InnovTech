import "../app/globals.css"; 
import Layout from "@/components/Layout";
import { appWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
        <div>
            <Component {...pageProps} />

        </div>
    </Layout>
  );
}

export default appWithTranslation(MyApp);