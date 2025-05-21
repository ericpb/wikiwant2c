import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContainer)}>
        <Heading as="h1" className={clsx("hero__title", styles.heroTitle)}>
          How can we help?
        </Heading>
        <p className={clsx("hero__subtitle", styles.heroSubtitle)}>
          Search our knowledge base using the search bar in the navigation menu or browse categories below.
        </p>
        
        <div className={styles.buttons}>
          <Link
            className={clsx("button button--lg", styles.browseButton)}
            to="/docs/intro"> 
            Browse FAQs
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - FAQ & Help Center`}
      description="Find answers to your questions and learn more about our product.">
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}
