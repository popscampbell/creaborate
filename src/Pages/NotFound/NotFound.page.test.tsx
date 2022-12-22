import { render, screen } from "@testing-library/react"
import NotFoundPage from "./NotFound.page"

jest.mock("hooks")

describe("About page", () => {
  function Test() {
    return <NotFoundPage />
  }

  it("Shows the page title", () => {
    render(<Test />)
    expect(screen.getByText("Did not find the page.")).toBeInTheDocument()
  })
})
