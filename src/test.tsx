// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { QueryClientProvider, QueryClient } from 'react-query'
import App from './App'

const queryClient = new QueryClient()
describe('<App/>', () => {
  it('loads and displays heading', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    )
  })
})
