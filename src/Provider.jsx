import React, {PropTypes} from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import IntlProvider from './IntlProvider';

const propTypes = {
    store: PropTypes.object
}

function Provider(props) {
  return (
    <ReduxProvider store={props.store}>
      <IntlProvider>
        {props.children}
      </IntlProvider>
    </ReduxProvider>
  )
};

Provider.propTypes = propTypes
export default Provider;