import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

import { AuthState } from './authState'
import { Authenticated } from './authenticated';
import { Unauthenticated } from './unauthenticated';

export function Login({ userName, authState, onAuthChange }) {
  return (
    <main className="container-fluid text-center">
      <div>
        {/* {authState !== AuthState.Unknown && <h1>My Planner</h1>} */}
        {authState === AuthState.Authenticated && (
          <Authenticated
            userName={userName}
            onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)}
          />
        )}
        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            onLogin={(loginUserName) => {
              onAuthChange(loginUserName, AuthState.Authenticated);
            }}
          />
        )}
      </div>
    </main>
  );
}
