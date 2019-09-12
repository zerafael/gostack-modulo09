import React from 'react';
import propTypes from 'prop-types';

import { Wrapper } from './styles';

function DefaultLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

DefaultLayout.propTypes = {
  children: propTypes.element.isRequired,
};

export default DefaultLayout;
