import React, { Component } from 'react'
import { connect } from 'react-redux'
import { WindowEnv } from 'views/components/etc/window-env'

import {
  createStructuredSelector,
} from 'reselect'

import { join } from 'path-extra'

import { FleetPicker } from './fleet-picker'
import { ExpeditionViewer } from './expedition-viewer'
import { RequirementViewer } from './requirement-viewer'

import { PTyp } from '../ptyp'

import {
  fleetInfoSelector,
} from '../selectors'

class EZExpedMainImpl extends Component {
  static propTypes = {
    fleet: PTyp.object,
  }

  static defaultProps = {
    fleet: null,
  }

  render() {
    const {
      fleet,
    } = this.props
    return (
      <WindowEnv.Consumer>
        {({mountPoint}) => (
          <div
            style={{
              flex: 1,
              height: 0,
              display: 'flex',
              flexDirection: 'column',
            }}
            className="poi-plugin-ezexped"
            >
            <link
              rel="stylesheet"
              href={join(__dirname, '..', 'assets', 'ezexped.css')}
            />
            <div style={{
              paddingRight: 5,
              paddingLeft: 5,
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
            }}>
              <FleetPicker />
              {
                fleet && (
                  <ExpeditionViewer
                    mountPoint={mountPoint}
                  />
                )
              }
              {
                fleet && (
                  <RequirementViewer />
                )
              }
            </div>
          </div>
        )}
      </WindowEnv.Consumer>
    )
  }
}

const mainUISelector = createStructuredSelector({
  fleet: fleetInfoSelector,
})

const EZExpedMain = connect(
  mainUISelector,
)(EZExpedMainImpl)

export {
  EZExpedMain,
}
