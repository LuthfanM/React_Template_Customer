import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { Label } from 'reactstrap';

const MainLabel = ({
    align, size, children, weight, className
}) => {

    const labelStyle = {
        fontSize: size + 'px',
        marginRight: '10px',
        marginLeft: '10px',
        alignSelf: align,
        fontWeight: weight,
    };

    return (
        <Label style={labelStyle} className={className}>
            {children}
        </Label>
    );
}

MainLabel.defaultProps = {
    align: "center",
    size: "12px",
    weight: "none"
  };

export default MainLabel;