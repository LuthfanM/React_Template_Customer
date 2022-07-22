import React, { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap'
import DashboardCard from '../ui-elements/DashboardCard';

import '@styles/base/bootstrap-extended.scss';
import MainCard from '../../@core/layouts/components/custom/MainCard';
import ChartApp from '../../@core/layouts/components/custom/chart/ChartApp';
import DashboardSideCard from '../ui-elements/DashboardSideCard';

const cards = [
    "Active Loan", "Total Active Loan Req", "Remain Loan Amount"
];
const cardIcon = [
    "activity", "airplay", "aperture"
];
const bgCard = [
    '#002b79', '#038874', '#ad0025'
];

const bgSideCard = [
    '#002b79', '#038874', '#ad0025', '#ad0025'
];

const ChloeDashboard = () => {

    const generateTopCard = () => {
        let temp = [];
        cards.map((val, index) => {
            temp.push(
                <Col xl='4' md='4' xs='12'>
                    <DashboardCard title={val} value="0" icon={cardIcon[index]} bgColor={bgCard[index]} />
                </Col>)
        })
        return temp;
    }

    const innerChart={
        
    }

    return (<>
        <Row className='match-height'>
            {
                generateTopCard()
            }
        </Row>
        <Row className='match-height'>
            <Col xl='8' md='8' xs='12'>
                <MainCard>
                    <ChartApp />
                </MainCard>
            </Col>
            <Col xl='4' md='4' xs='12'>
                <DashboardSideCard title="tes" value="0" />
                <DashboardSideCard title="tes" value="0" />
                <DashboardSideCard title="tes" value="0" />
                <DashboardSideCard title="tes" value="0" />
            </Col>
        </Row>
    </>);
}

export default ChloeDashboard;