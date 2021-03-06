import React from 'react';
import {expect} from 'chai';
import {createStore, combineReducers} from 'redux';
import intlReducer from 'redux-intl-connect/lib/intlReducer';
import {shallow} from 'enzyme';

import Provider from '../src/Provider';
import ValidateContext from './mocks/ValidateContext';

describe('Provider', function () {
  it('should provide intl context', function () {
    const store = getStore();
    const App = () => (
      <Provider store={store}>
        <ValidateContext />
      </Provider>
    )
    const app = shallow(<App />)
    expect(app.html()).to.be.equal('<span>yes</span>')
  });

  function getStore() {
    const reducer = combineReducers({
      intl: intlReducer,
    })

    return createStore(reducer);
  }
})
