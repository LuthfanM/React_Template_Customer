import React, { useState, useEffect } from 'react';
import MainLabel from '../../@core/layouts/components/custom/label/MainLabel';
import MainCard from '../../@core/layouts/components/custom/MainCard';
import { Navigation } from 'react-feather'

const DashboardCard = ({ title, width, logo, value, icon }) => {

    const IconCard = icon ? require('react-feather/dist/icons/' + icon).default :
        require('react-feather/dist/icons/help-circle').default;

    const style = {
        border: '2px solid red',
        backgroundColor: 'red',
        width: '20%',
        '&:after': {
            content: '""',
            position: 'absolute',
            width: 180,
            height: 180,
            background: 'red',
            borderRadius: '50%',
            bottom: -95,
            right: -95,
            opacity: 0.1,
            // [theme.breakpoints.down('sm')]: {
            //   top: -105,
            //   right: -140
            // }
          },
          '&:before': {
            content: '""',
            position: 'absolute',
            width: 180,
            height: 180,
            background: 'red',
            borderRadius: '50%',
            bottom: -135,
            right: -15,
            opacity: 0.5,
            // [theme.breakpoints.down('sm')]: {
            //   top: -155,
            //   right: -70
            // }
          }
    }

    return (
        <MainCard>
            <MainCard styled={style}>
                <IconCard style={{color: 'white', width: '75%', height: '75%'}}/>
            </MainCard>
            <MainLabel weight="bold" >
                {title}
            </MainLabel>
            <MainLabel weight="bold" >
                {value}
            </MainLabel>
        </MainCard>
    );
}

export default DashboardCard;