import { useSelector } from 'react-redux'
import StatisticLine from '../statisticLine/StatisticLine'

/* eslint-disable react/prop-types */
const Statistics = () => {
  const good = useSelector(state => state.good)
  const ok = useSelector(state => state.ok)
  const bad = useSelector(state => state.bad)

  const showStatistics = good > 0 || ok > 0 || bad > 0
  return (
    <div>
      <h2>Statistics</h2>
      {showStatistics ? (
        <table>
          <tbody>
            <StatisticLine name='Good' statistic={good} />
            <StatisticLine name='Ok' statistic={ok} />
            <StatisticLine name='Bad' statistic={bad} />
            <StatisticLine name='All' statistic={good + ok + bad} />
            <StatisticLine
              name='Average'
              statistic={(good - bad) / (good + ok + bad)}
              symbol='%'
            />
            <StatisticLine
              name='Positive'
              statistic={(good * 100) / (good + ok + bad)}
              symbol='%'
            />
          </tbody>
        </table>
      ) : (
        <h4>No feedback given</h4>
      )}
    </div>
  )
}

export default Statistics
