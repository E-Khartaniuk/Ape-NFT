import React, { useState } from 'react';
import css from './ContactUs.module.css';

import cross from '../../img/svg/cross.svg';
import SuccessRegister from 'components/SuccessRegister/SuccessRegister';

function ContactUs() {
  const [username, setUsername] = useState('');
  const [error, setError] = useState(false);

  const [wallet, setWallet] = useState('');
  const [walletError, setWalletError] = useState(false);

  const [userNameFiled, setUserNameFiled] = useState(false);

  const [successRegister, setSuccessRegister] = useState(false);

  const isValidUsername = username => {
    const usernameRegex = /^@[a-zA-Z0-9_]{1,15}$/;
    return usernameRegex.test(username);
  };

  const isValidWallet = wallet => {
    const walletRegex = /^[a-zA-Z0-9]{1,20}$/;
    return walletRegex.test(wallet);
  };

  const handleInputChange = event => {
    const value = event.target.value;
    if (value.length === 0) {
      setError(false);
      setUsername('');
      return;
    }
    setUsername(value.trim());
    setError(isValidUsername(value.trim()) ? '' : 'Wrong discord');
  };

  const handleWalletChange = event => {
    const value = event.target.value;
    if (value.length === 0) {
      setWallet('');
      return;
    }
    setWallet(value);
    setWalletError(isValidWallet(value) ? '' : 'Wrong address');
  };

  const handleContactsSubmit = event => {
    event.preventDefault();
    if (error || walletError || !username || !wallet) {
      alert('Invalid data');
      setSuccessRegister(false);
      return;
    }

    // alert('success submit');
    setSuccessRegister(true);
  };

  return (
    <section className={css.contactsContainer}>
      <h2 className={css.contactsTitle}>Are you in?</h2>
      <img src={cross} alt="cross" className={css.cross} />
      <p className={css.contatcsDescription}>
        Join the YACHT APE community to be one of the first to receive our
        limited edition NFT
      </p>
      {!successRegister ? (
        <form action="" className={css.contactsForm}>
          <div className={css.nameInputContainer}>
            <input
              type="text"
              name="name"
              placeholder="@username"
              minLength={6}
              required={true}
              value={username}
              onChange={handleInputChange}
              onFocus={() => {
                setUserNameFiled(!userNameFiled);
              }}
              className={`${css.contactsInputName} ${
                username && !error ? css.addFilledBorder : ''
              } ${error ? css.inputNameError : ''} `}
            />
            {error && <div className={css.errorMessage}>{error}</div>}
          </div>

          <div className={css.walletInputContainer}>
            <input
              type="text"
              name="wallet"
              placeholder="Wallet address"
              required={true}
              value={wallet}
              onChange={handleWalletChange}
              className={`${css.contactsInputWallet} 
            ${wallet && !walletError ? css.addFilledBorder : ''}
            ${walletError ? css.inputNameError : ''} 
              `}
            />
            {walletError && (
              <div className={css.errorMessage}>{walletError}</div>
            )}
          </div>
          <button
            type="submit"
            className={css.contactsButton}
            onClick={event => handleContactsSubmit(event)}
          >
            {error || walletError ? 'error' : 'MINT'}
          </button>
        </form>
      ) : (
        <SuccessRegister />
      )}
    </section>
  );
}

export default ContactUs;
