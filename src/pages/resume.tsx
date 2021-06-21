import React from 'react';

import { Layout, SEO } from 'components';
import { Timeline } from 'containers';
import { JobPostList } from 'containers';

const ResumePage = () => (
  <Layout noBackground>
    <SEO title='Resume' />
    <JobPostList />
    <Timeline />
  </Layout>
);

export default ResumePage;
