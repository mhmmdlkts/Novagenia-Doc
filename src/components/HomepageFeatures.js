import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
          Novogenia offers an <code>API</code> service that you can easily and quickly integrate into your systems.
      </>
    ),
  },
  {
    title: 'Well documented',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
          The APIs you need are clearly documented and illustrated with code <code>examples</code>.
      </>
    ),
  },
  {
    title: 'Everything you need',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
          Everything you do via the dashboard you can also do with the API's.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}