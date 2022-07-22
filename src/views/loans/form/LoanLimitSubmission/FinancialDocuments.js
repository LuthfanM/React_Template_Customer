import React, { useState, useEffect } from 'react';
import MainCard from '../../../../@core/layouts/components/custom/MainCard';
import { ArrowLeft, ArrowRight } from 'react-feather'
import LaporanKeuangan from './Financial-Document/LaporanKeuangan';
import { Label, Row, Col, Input, Form, Button } from 'reactstrap'

const FinancialDocuments = ({stepper, type}) => {
    return ( <>
        <LaporanKeuangan />
        <div className='d-flex justify-content-between'>
        <Button color='secondary' className='btn-prev' outline disabled>
                <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
                <span className='align-middle d-sm-inline-block d-none'>Previous</span>
            </Button>
        <Button color='primary' className='btn-next' onClick={() => stepper.next()}>
                <span className='align-middle d-sm-inline-block d-none'>Next</span>
                <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
            </Button>
            </div>
    </> );
}
 
export default FinancialDocuments;