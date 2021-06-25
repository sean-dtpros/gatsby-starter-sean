import React from 'react';

import { Layout, SEO } from 'components';
import { ContactForm } from 'components';

const ContactPage = () => (
  <Layout>
    <SEO title='Contact' />
    <ContactForm />
  </Layout>
);

export default ContactPage;
