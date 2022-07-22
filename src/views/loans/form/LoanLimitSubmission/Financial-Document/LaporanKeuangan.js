import React, { useState, useEffect } from 'react';
import { Label, Row, Col, Input, Form, Button } from 'reactstrap'
import MainCard from '../../../../../@core/layouts/components/custom/MainCard';
import Flatpickr from 'react-flatpickr'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import Breadcrumbs from '@components/breadcrumbs'

const LaporanKeuangan = ({ props, type }) => {
    const [picker, setPicker] = useState(new Date())
    const [addedFields, setAddedFields] = useState([])
   
    const addNewField = () => {
        let field = { fileName: "FILENAME", date: '2022-13-05'}
        setAddedFields([...addedFields, field])
    }

    return (<>
        <MainCard>
            <div className='content-header'>
                <h5 className='mb-0'>Laporan Keuangan 3 Tahun Terakhir</h5>
                <small className='text-muted'>Laporan</small>
                <Row>
                    <Col md='6' className='mb-1 inline-flex'>
                        <Label md="4" className='form-label' for={`username-${type}`}>
                            Type Name Here
                        </Label>
                        <Input md="8"
                            type='text'
                            name={`email-${type}`}
                            id={`email-${type}`}
                            placeholder='john.doe@email.com'
                            aria-label='john.doe'
                        />
                    </Col>
                    <Col md='6' className='mb-1 inline-flex'>
                        <Label md="4" className='form-label' for={`username-${type}`}>
                            Type Name Here
                        </Label>
                        <Flatpickr value={picker} onChange={date => setPicker(date)} id='default-picker' />
                        <Button md="2" color='primary' className='btn-next'>
                            <span className='align-middle d-sm-inline-block d-none'>Upload</span>
                        </Button>
                    </Col>
                </Row>
            </div>
            {addedFields.length > 0 && 
                addedFields.map((value, key) => 
                    <Row key={key} style={{ padding: '10px 0px'}}>
                        <Col md='6'>{value.fileName}</Col>
                        <Col md='6'>{value.date}</Col>
                    </Row>
                )
            }
            <Button color='primary' className='btn-next float-right' onClick={() => addNewField()}>
                <span className='align-middle d-sm-inline-block d-none'>Add</span>
            </Button>
        </MainCard>
        <MainCard>
            <div className='content-header'>
                <h5 className='mb-0'>Bank Statement Ops 1 Bulan Terakhir</h5>
                <small className='text-muted'>Laporan</small>
            </div>
            <Row>
                <Col md='6' className='mb-1 inline-flex'>
                    <Label md="4" className='form-label' for={`username-${type}`}>
                        Type Name Here
                    </Label>
                    <Input md="8"
                        type='text'
                        name={`email-${type}`}
                        id={`email-${type}`}
                        placeholder='john.doe@email.com'
                        aria-label='john.doe'
                    />
                </Col>
                <Col md='6' className='mb-1 inline-flex'>
                    <Label md="4" className='form-label' for={`username-${type}`}>
                        Type Name Here
                    </Label>
                    <Flatpickr value={picker} onChange={date => setPicker(date)} id='default-picker' />
                    <Button md="2" color='primary' className='btn-next'>
                        <span className='align-middle d-sm-inline-block d-none'>Upload</span>
                    </Button>
                </Col>
            </Row>
            <Button color='primary' className='btn-next float-right'>
                <span className='align-middle d-sm-inline-block d-none'>Add</span>
            </Button>
        </MainCard>
        <MainCard>
            <div className='content-header'>
                <h5 className='mb-0'>Sell In Report to Distributor 1 tahun terakhir</h5>
                <small className='text-muted'>Laporan</small>
            </div>
            <Row>
                <Col md='6' className='mb-1 inline-flex'>
                    <Label md="4" className='form-label' for={`username-${type}`}>
                        Type Name Here
                    </Label>
                    <Input md="8"
                        type='text'
                        name={`email-${type}`}
                        id={`email-${type}`}
                        placeholder='john.doe@email.com'
                        aria-label='john.doe'
                    />
                </Col>
                <Col md='6' className='mb-1 inline-flex'>
                    <Button md="2" color='primary' className='btn-next'>
                        <span className='align-middle d-sm-inline-block d-none'>Upload</span>
                    </Button>
                </Col>
            </Row>
        </MainCard>
        <MainCard>
            <div className='content-header'>
                <h5 className='mb-0'>Copy Contract Kerjasama Dengan Supplier</h5>
                <small className='text-muted'>Laporan</small>
            </div>
            <Row>
                <Col md='6' className='mb-1 inline-flex'>
                    <Label md="4" className='form-label' for={`username-${type}`}>
                        Type Name Here
                    </Label>
                    <Input md="8"
                        type='text'
                        name={`email-${type}`}
                        id={`email-${type}`}
                        placeholder='john.doe@email.com'
                        aria-label='john.doe'
                    />
                </Col>
                <Col md='6' className='mb-1 inline-flex'>
                    <Button md="2" color='primary' className='btn-next'>
                        <span className='align-middle d-sm-inline-block d-none'>Upload</span>
                    </Button>
                </Col>
            </Row>
        </MainCard>
        <MainCard>
            <div className='content-header'>
                <h5 className='mb-0'>Sample Invoice to The Customer</h5>
                <small className='text-muted'>Laporan</small>
            </div>
            <Row>
                <Col md='6' className='mb-1 inline-flex'>
                    <Label md="4" className='form-label' for={`username-${type}`}>
                        Type Name Here
                    </Label>
                    <Input md="8"
                        type='text'
                        name={`email-${type}`}
                        id={`email-${type}`}
                        placeholder='john.doe@email.com'
                        aria-label='john.doe'
                    />
                </Col>
                <Col md='6' className='mb-1 inline-flex'>
                    <Button md="2" color='primary' className='btn-next'>
                        <span className='align-middle d-sm-inline-block d-none'>Upload</span>
                    </Button>
                </Col>
            </Row>
        </MainCard>
        <MainCard>
            <div className='content-header'>
                <h5 className='mb-0'>Pengajuan Credit Limit</h5>
                <small className='text-muted'>Laporan</small>
            </div>
            <Row>
                <Col md='8' className='mb-1 inline-flex'>
                    <Label md="4" className='form-label' for={`username-${type}`}>
                        Jumlah Limit
                    </Label>
                    <Input md="8"
                        type='text'
                        name={`email-${type}`}
                        id={`email-${type}`}
                        placeholder='john.doe@email.com'
                        aria-label='john.doe'
                    />
                </Col>
            </Row>
        </MainCard>

    </>);
}

export default LaporanKeuangan;