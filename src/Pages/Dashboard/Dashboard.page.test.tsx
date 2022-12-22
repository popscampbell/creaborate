import { render, screen } from "@testing-library/react"
import DashboardPage from "./Dashboard.page"

jest.mock("hooks")

const mockedUsedNavigate = jest.fn()
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate
}))

describe("Dashboard page", () => {
  function Test() {
    return <DashboardPage />
  }

  it("Renders", () => {
    render(<Test />)
  })
})
