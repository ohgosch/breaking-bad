import React from "react"
import renderer from "react-test-renderer"

import { Modal } from "."

describe("[Component] Modal", () => {
  const props = {
    close: () => {},
  }
  it("Should renderer", () => {
    const tree = renderer.create(<Modal {...props}>Content</Modal>).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
