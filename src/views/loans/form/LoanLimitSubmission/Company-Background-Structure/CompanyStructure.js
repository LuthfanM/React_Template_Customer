import React, { useState, useEffect } from 'react';
import MainCard from '../../../../../@core/layouts/components/custom/MainCard';
import { Label, Row, Col, Input, Form, Button } from 'reactstrap'
import { ArrowLeft, ArrowRight } from 'react-feather';

const CompanyStructure = ({ stepper, type }) => {
    const style = {
        border: '2px solid #010432',
        width: '100%',
        height: '100%'
    }

    const onChange = e => {
        const reader = new FileReader(),
          files = e.target.files
        reader.onload = function () {
          setAvatar(reader.result)
        }
        reader.readAsDataURL(files[0])
    }

    return (<>
        <MainCard>
            <div className='content-header'>
                <h5 className='mb-0'>Company Structures</h5>
                <small className='text-muted'>Board of Directors</small>
            </div>
            <MainCard styled={style}>
                <Form onSubmit={e => e.preventDefault()}>
                    <Row>
                        <Col md='6' className='mb-1'>
                            <Label className='form-label fw-bold' for={`username-${type}`}>
                                Company Name
                            </Label>
                        </Col>
                        <Col md='6' className='mb-1'>
                            <Label className='form-label fw-bold' for={`username-${type}`}>
                                PT Tes
                            </Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6' className='mb-1'>
                            <Label className='form-label fw-bold' for={`username-${type}`}>
                                Director Name
                            </Label>
                            <Input
                                type='text'
                                name={`email-${type}`}
                                id={`email-${type}`}
                                placeholder='john.doe@email.com'
                                aria-label='john.doe'
                            />
                        </Col>
                        <Col md='6' className='mb-1'>
                            <Label className='form-label fw-bold' for={`username-${type}`}>
                                Role*
                            </Label>
                            <Input
                                type='text'
                                name={`email-${type}`}
                                id={`email-${type}`}
                                placeholder='john.doe@email.com'
                                aria-label='john.doe'
                            />
                        </Col>
                        <Col md='6' className='mb-1'>
                            <Label className='form-label fw-bold' for={`username-${type}`}>
                                Superior*
                            </Label>
                            <Input
                                type='text'
                                name={`email-${type}`}
                                id={`email-${type}`}
                                placeholder='john.doe@email.com'
                                aria-label='john.doe'
                            />
                        </Col>
                    </Row>
                    <Row>
                    <Col md='6' className='mb-1'>
                            <Label className='form-label fw-bold' md="6" for={`username-${type}`}>
                                KTP
                            </Label>
                            <Button  md="6" color='primary' tag={Label}>
                                Upload Files
                                <Input type='file' onChange={onChange} hidden accept='image/*' />
                            </Button>
                        </Col>
                        <Col md='6' className='mb-1'>
                            <Label md="6" className='form-label fw-bold' for={`username-${type}`}>
                                NPWP
                            </Label>
                            <Button md="6" color='primary' type="file">Upload Files</Button>
                        </Col>
                    </Row>
                </Form>
            </MainCard>
        </MainCard>
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

export default CompanyStructure;