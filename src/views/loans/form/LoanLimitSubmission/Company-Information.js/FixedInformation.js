import React, { useState, useEffect } from 'react';
import { Label, Row, Col, Input, Form, Button } from 'reactstrap'
import MainCard from '../../../../../@core/layouts/components/custom/MainCard';
import { replaceAll } from '../../../../../utility/Utils';

const title = [
    "Total Registered Outlet Active",
    "Total Warehouse",
    "Total Number of Employee",
    "Total Salesman",
    "Sales Per Month",
    "Total Delivery Car",
    "Top From Principas",
    "Top To Buyers"
]

const FixedInformation = ({ props, type }) => {
    return (<>
        <MainCard>
            <div className='content-header'>
                <h5 className='mb-0'>Information</h5>
                <small className='text-muted'>Company</small>
            </div>
            <Form onSubmit={e => e.preventDefault()}>
                {
                    title.map((val, index) => {
                        return (
                            <Row>
                                <Col md='12' className='mb-1 inline-flex'>
                                    <Label md='4' className='form-label' for={'total-'+replaceAll(val.toLowerCase(), ' ', '-')+"-"+type}>
                                        {val}
                                    </Label>
                                    <Input md='8'
                                        type='text'
                                        name={'total-'+replaceAll(val.toLowerCase(), ' ', '-')+"-"+type}
                                        id={'total-'+replaceAll(val.toLowerCase(), ' ', '-')+"-"+type}
                                        placeholder={val}
                                        aria-label={val}
                                    />
                                </Col>
                            </Row>
                        )
                    })
                }
            </Form>
        </MainCard>
    </>);
}

export default FixedInformation;