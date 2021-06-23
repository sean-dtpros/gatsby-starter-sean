import React from 'react';

import { Layout, SEO } from 'components';
import { ResumeSummary} from 'containers';
import { JobPostList } from 'containers';

const AboutPage = () => (
  <Layout>
    <SEO title='Resume - Sean Mahoney' />
    <ResumeSummary />
    <JobPostList />
  </Layout>
);

export default ResumePage;
