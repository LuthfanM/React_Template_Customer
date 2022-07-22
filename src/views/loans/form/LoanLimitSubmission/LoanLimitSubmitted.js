import React, { useState, useEffect } from 'react';
import { Label, Row, Col, Input, Form, Button } from 'reactstrap'
import { ArrowLeft, ArrowRight } from 'react-feather'
import MainCard from '../../../../@core/layouts/components/custom/MainCard';
import { useNavigate } from 'react-router-dom';
import { PATH_LOAN_SUBMIT } from '../../../../navigation/path';

const data = [
    "Name", "Head Office Address", "Brand", "Business Line", "Area", "BD PIC"
]

const LoanLimitSubmitted = ({stepper, type}) => {
    const navigate = useNavigate()

    return (<>
        <MainCard>
            <div className='content-header'>
                <h5 className='mb-0'>Loan Limit Submitted</h5>
                <small className='text-muted'>Document</small>
            </div>
            {
                data.map((val, index) => {
                    return (<Row>
                        <Col md='4' className='mb-1 inline-flex'>
                            {val}
                        </Col>
                        <Col md='8' className='mb-1 inline-flex'>
                            {val}
                        </Col>
                    </Row>)
                })
            }
        </MainCard>
        <MainCard>
        <div className='content-header'>
                <h5 className='mb-0'>Loan Limit Submitted</h5>
                <small className='text-muted'>Document</small>
            </div>
        </MainCard>
        <div className='d-flex justify-content-between'>
            <Button color='secondary' className='btn-prev' outline disabled>
                <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
                <span className='align-middle d-sm-inline-block d-none'>Previous</span>
            </Button>
            <Button color='primary' className='btn-next' onClick={()=>navigate(PATH_LOAN_SUBMIT)}>
                <span className='align-middle d-sm-inline-block d-none'>Submit</span>
                <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
            </Button>
        </div>
    </>);
}

export default LoanLimitSubmitted;