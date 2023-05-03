import React, { Fragment } from 'react'
import { Appbar } from 'react-native-paper';

const AppHeader = ({ children, style }) => {

  return (
    <Fragment>
      <Appbar.Header style={{ ...style }}>
        {children}
      </Appbar.Header>
    </Fragment>
  )
}

export default AppHeader