import PropTypes from "prop-types";

const PageTitle = ({ title }) => {
  return (
    <h1 id="page-title">{title}</h1>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string,
}

export default PageTitle;