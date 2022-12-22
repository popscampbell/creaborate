import { render, screen } from "@testing-library/react"
import AboutPage from "./About.page"

jest.mock("hooks")

describe("About page", () => {
  function Test() {
    return <AboutPage />
  }

  it("Shows the page title", () => {
    render(<Test />)
    expect(screen.getByText("About Creaborate")).toBeInTheDocument()
  })
})
