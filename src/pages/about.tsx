import React from 'react';

import { Layout, SEO } from 'components';
import { About } from 'containers';
import { JobPostList } from 'containers';

const AboutPage = () => (
  <Layout>
    <SEO title='About' />
    <About />
    <JobPostList />
  </Layout>
);

export default AboutPage;
