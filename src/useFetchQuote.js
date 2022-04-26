import { useQuery } from 'react-query'

export const useFetchQuote = () => {
  return useQuery('customHook', () => 'Quote')
}
