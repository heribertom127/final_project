// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from 'react'
import { render, renderHook, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { QueryClientProvider, QueryClient } from 'react-query'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import App from './App'
import { useFetchQuote } from 'useFetchQuote'

const server = setupServer(
  rest.get('https://api.kanye.rest', (req, res, ctx) => {
    return res(ctx.json({ quote: 'This is Quote' }))
  })
)
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
const MockApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  )
}

const queryClient = new QueryClient()
describe('<App/>', () => {
  it('loads and displays heading', async () => {
    render(<MockApp />)
    const heading = await screen.findByRole('heading', { name: 'KANYE WEST' })
    expect(heading).toBeInTheDocument()
  })
  // it('user clicks get inspired and quote shows up', async () => {
  //   const queryClient = new QueryClient()
  //   const wrapper = ({ children }) => (
  //     <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  //   )

  //   const { result, waitFor } = renderHook(() => useFetchQuote(), { wrapper })

  //   await waitFor(() => result.current.isSuccess)

  //   expect(result.current.data).toEqual('Hello')
  //   const button = await screen.findByRole('button', { name: 'Get Inspired' })
  //   userEvent.click(button)
  //   const quote = await screen.findByText(/quote/i)
  //   expect(quote).toBeInTheDocument()
  // })
  it('check for getdisplayed button', async () => {
    render(<MockApp />)
    const heading = await screen.findByRole('button', { name: 'Get Inspired' })
    expect(heading).toBeInTheDocument()
  })
  it('check for Show Respect button', async () => {
    render(<MockApp />)
    const heading = await screen.findByRole('button', { name: 'Show Respect' })
    expect(heading).toBeInTheDocument()
  })
  it('check for New Image button', async () => {
    render(<MockApp />)
    const heading = await screen.findByRole('button', { name: 'New Image' })
    expect(heading).toBeInTheDocument()
  })

  it('check for Image ', async () => {
    render(<MockApp />)
    const heading = await screen.findByRole('img')
    expect(heading).toBeInTheDocument()
  })
  it('check for lottie ', async () => {
    render(<MockApp />)
    const heading = await screen.findByRole('button', { name: 'Show Respect' })
    userEvent.click(heading)
    const svg = await screen.findByTestId('lottie')
    expect(svg).toBeInTheDocument()
  })

  it('check for image after clicking button', async () => {
    render(<MockApp />)
    const heading = await screen.findByRole('button', { name: 'New Image' })
    userEvent.click(heading)
    const svg = await screen.findByRole('img')
    expect(svg).toBeInTheDocument()
  })
})
