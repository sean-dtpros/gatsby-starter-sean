import React from 'react';

import { Layout, SEO } from 'components';
import { About} from 'containers';
import { JobPostList } from 'containers';

const ResumePage = () => (
  <Layout>
    <SEO title='Resume - Sean Mahoney' />
    <About />
    <JobPostList />
  </Layout>
);

export default ResumePage;
