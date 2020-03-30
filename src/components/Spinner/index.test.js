import React from "react"
import renderer from "react-test-renderer"

import { Spinner } from "."

describe("[Component] Spinner", () => {
  it("Should renderer", () => {
    const tree = renderer.create(<Spinner />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
