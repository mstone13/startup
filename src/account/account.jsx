import React from 'react';
import './account.css';

export function Account() {
  return (
    <main>
      <section className="account-info">
          <h3>*Name of User*</h3>
          <div className="info-grid">
            <div className="info-card"><b>Email:</b> *user email*</div>
            <div className="info-card"><b>Username:</b> *username*</div>
            <div className="info-card"><b>Member Since:</b> *date joined*</div>
            <div className="info-card"><b>Friends:</b> *list of friends*</div>
          </div>
      </section>
        
      <section className="signup">
        <p>Don't have an account? </p>
        <button>Create Account</button>
      </section>
    </main>
  );
}