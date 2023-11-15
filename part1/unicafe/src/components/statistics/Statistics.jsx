import StatisticLine from "../statisticLine/StatisticLine";

/* eslint-disable react/prop-types */
const Statistics = ({ good, neutral, bad }) => {
  const showStatistics = good > 0 || neutral > 0 || bad > 0;
  return (
    <div>
      <h2>Statistics</h2>
      {showStatistics ? (
        <table>
          <tbody>
            <StatisticLine name="Good" statistic={good} />
            <StatisticLine name="Neutral" statistic={neutral} />
            <StatisticLine name="Bad" statistic={bad} />
            <StatisticLine name="All" statistic={good + neutral + bad} />
            <StatisticLine
              name="Average"
              statistic={(good - bad) / (good + neutral + bad)}
              symbol="%"
            />
            <StatisticLine
              name="Positive"
              statistic={(good * 100) / (good + neutral + bad)}
              symbol="%"
            />
          </tbody>
        </table>
      ) : (
        <h4>No feedback given</h4>
      )}
    </div>
  );
};

export default Statistics;
