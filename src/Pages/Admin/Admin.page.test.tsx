import { render, screen } from "@testing-library/react"
import AdminPage from "./Admin.page"

jest.mock("hooks")

describe("Admin page", () => {
  function Test() {
    return <AdminPage />
  }

  it("Shows the page title", () => {
    render(<Test />)
    expect(screen.getByText("Administration")).toBeInTheDocument()
  })
})
