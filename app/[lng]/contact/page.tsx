import './contact.scss';

import * as React from 'react';
import Contact from './Contact';

export default async function ContactPage({ params: { lng } }) {
  return <Contact lng={lng} />;
}
