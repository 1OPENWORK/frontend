import { get } from '../../services/Generected'

const URI = 'http://localhost:8004/api'

export const handleProeficiency = async () => {
  return await get(URI + '/especializacoes')
}
