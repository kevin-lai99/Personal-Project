import {
  useQuery,
  // useMutation,
  // useQueryClient,
  // MutationFunction,
} from '@tanstack/react-query'

import { getCharacterById, getAllCharacter } from '../apis/api'

export function useAllCharacter() {
  return useQuery({ queryKey: ['character'], queryFn: getAllCharacter })
}

export function useCharacterById(character_id: number | string) {
  return useQuery({
    queryKey: ['character', character_id],
    queryFn: () => getCharacterById(character_id),
  })
}
