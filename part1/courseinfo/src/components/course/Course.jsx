/* eslint-disable react/prop-types */
import Content from "../content/Content";
import Header from "../header/Header";
import Total from "../total/Total";

const Course = ({course}) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default Course;
