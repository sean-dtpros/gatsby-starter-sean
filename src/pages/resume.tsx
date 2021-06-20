import React from 'react';

import { Layout, SEO } from 'components';
import { JobPostList } from 'containers';

const ResumePage = () => (
  <Layout noBackground>
    <SEO title='Resume' />
    <JobPostList />
  </Layout>
);

export default ResumePage;
