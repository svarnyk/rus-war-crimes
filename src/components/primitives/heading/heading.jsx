import React from "react"
import "./heading.css"
import PropTypes from "prop-types"

export default function Heading({ weight, children }) {
  const headWeight = Math.max(1, Math.min(weight, 3))
  const className = `heading${headWeight}`

  return <div className={className}>{children}</div>
}

Heading.propTypes = {
  /**
   *Sets heading weight from 1 to 6. Other values are adjusted to the nearest value in the range.
   */
  weight: PropTypes.oneOf([1, 2, 3]).isRequired,
  /**
   * Heading text
   */
  children: PropTypes.string.isRequired,
  /**
   * if plain is set generates a div tag with the headingX class instead of the H tag
   */
}

Heading.defaultProps = {
}
