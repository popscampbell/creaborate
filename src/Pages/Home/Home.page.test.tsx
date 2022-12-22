import { render, screen } from "@testing-library/react"
import HomePage from "./Home.page"

jest.mock("hooks")

describe("About page", () => {
  function Test() {
    return <HomePage />
  }

  it("Shows the page title", () => {
    render(<Test />)
    expect(screen.getByText("Welcome")).toBeInTheDocument()
  })
})
