import React, { useState } from 'react';
import MainCard from '@layouts/components/custom/MainCard';
import Select from 'react-select';
import { ArrowLeft, ArrowRight } from 'react-feather'
import { selectThemeColors } from '@utils'
import { Label, Row, Col, Input, Form, Button } from 'reactstrap'

const aktaOption = [
    { value: 'ocean', label: 'Ocean' },
    { value: 'blue', label: 'Blue' },
    { value: 'purple', label: 'Purple' },
    { value: 'red', label: 'Red' },
    { value: 'orange', label: 'Orange' }
]

const documentType = [
    { value: 'ocean', label: 'Ocean' },
    { value: 'blue', label: 'Blue' },
    { value: 'purple', label: 'Purple' },
    { value: 'red', label: 'Red' },
    { value: 'orange', label: 'Orange' }
]

const CompanyDocuments = ({stepper, type}) => {
    return ( <>
    <MainCard>
         <div className='content-header'>
                <h5 className='mb-0'>Akta Pendirian dan Perubahan Terakhir</h5>
                <small className='text-muted'>Enter here</small>
            </div>
            <Form onSubmit={e => e.preventDefault()}>
                <Row>
                    <Col md='6' className='mb-1'>
                        <Label className='form-label' for={`tahun-pendirian-${type}`}>
                            Pilih Jenis Akta
                        </Label>
                        <Select
                            theme={selectThemeColors}
                            className='react-select'
                            classNamePrefix='select'
                            defaultValue={aktaOption[0]}
                            options={aktaOption}
                            isClearable={false}
                        />
                    </Col>
                    <Col md='6' className='mb-1'>
                        <Label className='form-label' for={`tahun-pendirian-${type}`}>
                            Tahun Pendirian / Perubahan
                        </Label>
                        <Input
                            type='text'
                            name={`tahun-pendirian-${type}`}
                            id={`tahun-pendirian-${type}`}
                            placeholder='Tahun Pendirian / Perubahan'
                            aria-label='Tahun Pendirian / Perubahan'
                        />
                    </Col>
                </Row>
                <Row>
                    <div className='form-password-toggle col-md-6 mb-1'>
                        <Label className='form-label' for={`password-${type}`}>
                            Upload Document
                        </Label>
                        <Button color='secondary float-right' outline disabled>
                            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
                            <span className='align-middle d-sm-inline-block d-none'>Upload</span>
                        </Button>
                    </div>
                    <div className='form-password-toggle col-md-6 mb-1'>
                        <Label className='form-label' for={`confirm-password-${type}`}>
                            Notes
                        </Label>
                        <div className='form-floating mt-2'>
                            <Input
                                type='textarea'
                                name='text'
                                id='floating-textarea'
                                placeholder='Floating Label'
                                style={{ minHeight: '100px' }}
                            />
                        </div>
                    </div>
                </Row>
            </Form>
        </MainCard>
        {/* 2 */}
        <MainCard>
            <div className='content-header'>
                <h5 className='mb-0'>Pengesahan Kemenkunham</h5>
                <small className='text-muted'>Enter here</small>
            </div>
            <Form onSubmit={e => e.preventDefault()}>
                <Row>
                    <Col md='6' className='mb-1'>
                        <Label className='form-label'>
                            Pilih Jenis Akta
                        </Label>
                        <Select
                            theme={selectThemeColors}
                            className='react-select'
                            classNamePrefix='select'
                            defaultValue={aktaOption[0]}
                            options={aktaOption}
                            isClearable={false}
                        />
                    </Col>
                    <Col md='6' className='mb-1'>
                        <Label className='form-label' for={`thn-pendirian-kemenkunham-${type}`}>
                            Masukan Tahun Pendirian/Pembuatan
                        </Label>
                        <Input
                            type='text'
                            name={`thn-pendirian-kemenkunham-${type}`}
                            id={`thn-pendirian-kemenkunham-${type}`}
                            placeholder='Tahun Pendirian / Pembuatan'
                            aria-label='Tahun Pendirian / Pembuatan'
                        />
                    </Col>
                </Row>
                <Row>
                    <div className='form-password-toggle col-md-6 mb-1'>
                        <Label className='form-label' for={`password-${type}`}>
                            Upload Document
                        </Label>
                        <Button color='secondary float-right' outline disabled>
                            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
                            <span className='align-middle d-sm-inline-block d-none'>Upload</span>
                        </Button>
                    </div>
                    <div className='form-password-toggle col-md-6 mb-1'>
                        <Label className='form-label' for={`confirm-password-${type}`}>
                            Notes
                        </Label>
                        <div className='form-floating mt-2'>
                            <Input
                                type='textarea'
                                name='text'
                                id='floating-textarea'
                                placeholder='Floating Label'
                                style={{ minHeight: '100px' }}
                            />
                        </div>
                    </div>
                </Row>
            </Form>
             <Button color='primary' className='btn-next float-right' onClick={() => stepper.next()}>
                <span className='align-middle d-sm-inline-block d-none'>Add</span>
                <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
            </Button>
        </MainCard>
        {/* 3 */}
        <MainCard>
            <div className='content-header'>
                <h5 className='mb-0'>Company Background Document</h5>
                <small className='text-muted'>Enter here</small>
            </div>
            <Form onSubmit={e => e.preventDefault()}>
                <Row>
                    <Col md='6' className='mb-1'>
                        <Label className='form-label' for={`username-${type}`}>
                            Pilih Jenis Dokumen
                        </Label>
                        <Select
                            theme={selectThemeColors}
                            className='react-select'
                            classNamePrefix='select'
                            defaultValue={aktaOption[0]}
                            options={aktaOption}
                            isClearable={false}
                        />
                        <Button color='secondary float-right' outline disabled>
                            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
                            <span className='align-middle d-sm-inline-block d-none'>Upload</span>
                        </Button>
                    </Col>
            </Row>
            </Form>
             <Button color='primary' className='btn-next float-right' onClick={() => stepper.next()}>
                <span className='align-middle d-sm-inline-block d-none'>Add</span>
                <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
            </Button>
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
    </> );
}
 
export default CompanyDocuments;