import React from 'react';

import { Layout, SEO } from 'components';
import { ResumeSummary} from 'containers';
import { JobPostList } from 'containers';

const ResumePage = () => (
  <Layout>
    <SEO title='Resume - Sean Mahoney' />
    <ResumeSummary />
    <JobPostList />
  </Layout>
);

export default ResumePage;
