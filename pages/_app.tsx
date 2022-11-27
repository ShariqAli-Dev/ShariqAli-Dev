import Layout from "../components/layouts";
import Fonts from "../components/Fonts";
import Chakra from "../components/Chakra";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

function Website({ Component, pageProps, router }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  );
}

export default Website;
