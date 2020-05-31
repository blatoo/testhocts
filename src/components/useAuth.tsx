import { useSelector } from 'react-redux'
import { RootReducerState } from '../reducers'
import {useHistory} from 'react-router-dom'

export const useAuth = () => {
  const auth = useSelector<RootReducerState>((state) => state.auth)
  const history = useHistory()
  if (!auth) {
    history.push('/')
  }
}