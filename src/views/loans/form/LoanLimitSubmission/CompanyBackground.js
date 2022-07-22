import React, { useState, useEffect } from 'react';

import { ArrowLeft, ArrowRight } from 'react-feather'
// ** Reactstrap Imports

import { Label, Row, Col, Input, Form, Button } from 'reactstrap'
import MainCard from '@layouts/components/custom/MainCard';
import InputCompany from './Company-Background/InputCompany';
// import CompanyStructure from './Company-Background/CompanyStructure';
// import CompanyDocuments from './Company-Background/CompanyDocuments';

const CompanyBackground = ({ stepper, type }) => {
    return (<>
        <MainCard>
            <InputCompany type="company-background" />
        </MainCard>
    {/* 1 */}
        {/* below button */}
        <div className='d-flex justify-content-between'>
            <Button color='secondary' className='btn-prev' outline disabled>
                <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
                <span className='align-middle d-sm-inline-block d-none'>Previous</span>
            </Button>
            <Button color='primary' className='btn-next' onClick={() => stepper.next()}>
                <span className='align-middle d-sm-inline-block d-none'>Save as Draft</span>
                <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
            </Button>
            <Button color='primary' className='btn-next' onClick={() => stepper.next()}>
                <span className='align-middle d-sm-inline-block d-none'>Next</span>
                <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
            </Button>
        </div>
    </>);
}

export default CompanyBackground;