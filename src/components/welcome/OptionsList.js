import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Option from 'components/welcome/Option'

const OptionsList = (props) => {
  const ids = []
  const options = props.options.map((o) => {
    if (ids.indexOf(o.id) === -1) {
      ids.push(o.id)
      return (
        <Option
          hide={props.hide}
          stopBlur={props.stopBlur}
          mouseUp={props.mouseUp}
          key={o.id}
          {...o}
        />
      )
    }
    return null
  })
  if (options.length > 0) {
    return <DropDown className={props.className} show={props.show}>{options}</DropDown>
  }
  return null
}
OptionsList.propTypes = {
  show: PropTypes.bool.isRequired
}

const DropDown = styled.div`
  display: ${props => props.show ? 'flex' : 'none'};
  flex-direction: column;
  min-height: 40px;
  max-height: 160px;
  overflow: hidden;
  width: 100%;
  button::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
}
`
export default OptionsList
