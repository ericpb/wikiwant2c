import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

// For the search input state
import {useState} from 'react'; 
// For navigation to the search page
import {useHistory} from '@docusaurus/router'; 

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const [searchValue, setSearchValue] = useState('');
  const history = useHistory();

  const handleSearchSubmit = (e?: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
    if (e) e.preventDefault();
    if (searchValue.trim() !== '') {
      history.push(`/search?q=${encodeURIComponent(searchValue)}`);
    }
  };

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContainer)}>
        <Heading as="h1" className={clsx("hero__title", styles.heroTitle)}>
          How can we help?
        </Heading>
        <p className={clsx("hero__subtitle", styles.heroSubtitle)}>
          Search our knowledge base or browse categories.
        </p>
        
        {/* Search Bar Implementation */}
        <form className={styles.searchBarContainer} onSubmit={handleSearchSubmit}>
          <input 
            type="search" 
            className={styles.searchBarInput}
            placeholder="Search FAQs..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            aria-label="Search"
          />
          <button type="submit" className={styles.searchBarButton}>
            Search
          </button>
        </form>

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
