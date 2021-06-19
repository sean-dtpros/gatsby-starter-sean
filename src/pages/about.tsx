import React from 'react';

import { Layout, SEO } from 'components';
import { About } from 'containers';
import { Resume } from '../containers';

const AboutPage = () => (
  <Layout>
    <SEO title='About' />
    <About />
    <Resume />
  </Layout>
);

export default AboutPage;
