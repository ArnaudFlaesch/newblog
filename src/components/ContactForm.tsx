import { useTranslations } from '@/i18n/utils';
import './contact.scss';

import { useForm, ValidationError } from '@formspree/react';

import * as React from 'react';

export default function ContactForm(): React.ReactElement {
  const lang = 'fr';
  const t = useTranslations(lang);

  const [state, handleSubmit, reset] = useForm('mkndgrkd');

  const [nameText, setNameText] = React.useState('');
  const [emailText, setEmailText] = React.useState('');
  const [messageText, setMessageText] = React.useState('');

  function isFormInvalid(): boolean {
    return state.submitting || !nameText.length || !emailText.length || !messageText.length;
  }

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNameText(event.target.value);
  }
  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmailText(event.target.value);
  }
  function handleMessageChange(event: React.ChangeEvent<HTMLInputElement>) {
    setMessageText(event.target.value);
  }

  return (
    <>
      {state.succeeded ? (
        <div>
          <p>{t('EMAIL.SENT')}</p>
          <button onClick={reset}>{t('SENT.ANOTHER.MAIL')}</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div id="contact-form">
            <div id="contact-informations">
              <div className="form-field">
                <label>{t('NAME.FIRSTNAME')}</label>
                <input id="name" type="text" name="name" className="contact-field" onChange={handleNameChange} />
                <ValidationError className="error-message" prefix="Name" field="name" errors={state.errors} />
              </div>

              <div className="form-field">
                <label>{t('YOUR.EMAIL.ADDRESS')}</label>
                <input id="email" type="email" name="email" className="contact-field" onChange={handleEmailChange} />
                <ValidationError className="error-message" prefix="Email" field="email" errors={state.errors} />
              </div>
            </div>

            <div className="form-field">
              <label>{t('MESSAGE')}</label>

              <input
                id="message"
                type="message"
                name="message"
                className="contact-field"
                onChange={handleMessageChange}
              />
              <ValidationError className="error-message" prefix="Message" field="message" errors={state.errors} />
            </div>

            <button id="submit-button" type="submit" disabled={isFormInvalid()}>
              {t('SEND')}
            </button>
          </div>
        </form>
      )}
    </>
  );
}
