/* eslint-disable react/prop-types */
const StatisticLine = ({ name, statistic, symbol }) => {
  const numberFixed = Number(statistic.toFixed(2))
  return (
    <tr>
      <td>{name}</td>
      <td>{numberFixed} {symbol}</td>
    </tr>
  );
};

export default StatisticLine;
