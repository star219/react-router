import useQueries from 'history/lib/useQueries'
import useBasename from 'history/lib/useBasename'

export default function createRouterHistory(createHistory) {
  const history = useBasename(useQueries(createHistory))()
  history.__v2_compatible__ = true
  return history
}
