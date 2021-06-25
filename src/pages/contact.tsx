import React from 'react';

import { Layout, SEO } from 'components';
import { Contact } from 'containers';

const ContactPage = () => (
  <Layout>
    <SEO title='Contact' />
    <Contact />
  </Layout>
);

export default ContactPage;
