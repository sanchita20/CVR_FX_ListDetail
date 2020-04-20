import React from "react";
import PropTypes from 'prop-types';

const Title = ({ title }) => {
    return (
        <h1>{title}</h1>
    );
}

Title.defaultProps = {
    title: undefined
}

Title.propTypes = {
    title: PropTypes.string
}

export default Title;