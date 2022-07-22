import React, { useState, useEffect } from 'react';
import { Label, Row, Col, Input, Form, Button } from 'reactstrap'
import MainCard from '../../../../../@core/layouts/components/custom/MainCard';
import { ArrowLeft, ArrowRight } from 'react-feather'

const CustomInformation = ({ props, type }) => {
    return (<>
        <MainCard>
            <div className='content-header'>
                <h5 className='mb-0'>Upload Additional Document</h5>
                <small className='text-muted'>Document</small>
            </div>
            <Form onSubmit={e => e.preventDefault()}>
                <Row>
                    <Col md='12' className='mb-1 inline-flex'>
                        <Label md="4" className='form-label' for={`additional-doc-${type}`}>
                            Type Name Here
                        </Label>
                        <Input md="8"
                            type='text'
                            name={`additional-doc-${type}`}
                            id={`additional-doc-${type}`}
                            placeholder='Additional Document'
                            aria-label='Additional Document'
                        />
                    </Col>
                    <Col md='12' className='mb-1 inline-flex'>
                        <Label md="4" className='form-label' for={`username-${type}`}>
                            Type Description here
                        </Label>
                        <Input md="8"
                            type='textarea'
                            name='text'
                            id='floating-textarea'
                            placeholder='Floating Label'
                            style={{ minHeight: '100px' }}
                        />
                    </Col>
                </Row>
                <Button color='primary' className='btn-next float-right' onClick={() => stepper.next()}>
                            <span className='align-middle d-sm-inline-block d-none'>Add</span>
                            <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
                        </Button>
            </Form>
        </MainCard>
    </>);
}

export default CustomInformation;