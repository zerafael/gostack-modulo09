import React from 'react';
import propTypes from 'prop-types';

import { Wrapper } from './styles';

function AuthLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

AuthLayout.propTypes = {
  children: propTypes.element.isRequired,
};

export default AuthLayout;
