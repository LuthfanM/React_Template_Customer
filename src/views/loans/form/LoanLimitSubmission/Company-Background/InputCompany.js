import React, { useState, useEffect } from 'react';
import { Label, Row, Col, Input, Form, Button } from 'reactstrap'
import Select from 'react-select';
import { ArrowLeft, ArrowRight } from 'react-feather'
import { selectThemeColors } from '@utils'

const aktaOption = [
    { value: 'ocean', label: 'Ocean' },
    { value: 'blue', label: 'Blue' },
    { value: 'purple', label: 'Purple' },
    { value: 'red', label: 'Red' },
    { value: 'orange', label: 'Orange' }
]

const InputCompany = ({ props, type }) => {

    const onChange = e => {
        const reader = new FileReader(),
          files = e.target.files
        reader.onload = function () {
          setAvatar(reader.result)
        }
        reader.readAsDataURL(files[0])
    }

    return (<>
        <div className='content-header'>
            <h5 className='mb-0'>Company Form</h5>
            <small className='text-muted'>Input here</small>
            <Form onSubmit={e => e.preventDefault()}>
                <Row>
                    <Col md='12' className='mb-1'>
                        <Label className='form-label' for={`${type}-input-name`}>
                            Company Name
                        </Label>
                        <Input
                            type='text'
                            name={`${type}-input-name`}
                            id={`input-name-${type}`}
                            placeholder='Company Name'
                            aria-label='Company Name'
                        />
                    </Col>
                </Row>
                {/* 2 */}
                <Row>
                    <Col md='12' className='mb-1'>
                        <Label className='form-label' for={`address-${type}`}>
                            Company Address
                        </Label>
                        <Input
                            type='text'
                            name={`address-${type}`}
                            id={`address-${type}`}
                            placeholder='Company Address'
                            aria-label='Company Address'
                        />
                    </Col>
                </Row>
                {/* 3 */}
                <Row>
                    <Col md='6' className='mb-1'>
                        <Label className='form-label' for={`select-city-${type}`}>
                            City
                        </Label>
                        <Select
                            id={`select-city-${type}`}
                            theme={selectThemeColors}
                            className='react-select'
                            classNamePrefix='select'
                            defaultValue={aktaOption[0]}
                            options={aktaOption}
                            isClearable={false}
                        />
                    </Col>
                    <Col md='6' className='mb-1'>
                        <Label className='form-label' for={`select-state-${type}`}>
                            State/Province
                        </Label>
                        <Select
                            id={`select-state-${type}`}
                            theme={selectThemeColors}
                            className='react-select'
                            classNamePrefix='select'
                            defaultValue={aktaOption[0]}
                            options={aktaOption}
                            isClearable={false}
                        />
                    </Col>
                </Row>
                {/* ---3 */}
                <Row>
                    <Col md='6' className='mb-1'>
                        <Label className='form-label' for={`select-country-${type}`}>
                            Country
                        </Label>
                        <Select
                            id={`select-country-${type}`}
                            theme={selectThemeColors}
                            className='react-select'
                            classNamePrefix='select'
                            defaultValue={aktaOption[0]}
                            options={aktaOption}
                            isClearable={false}
                        />
                    </Col>
                    <Col md='6' className='mb-1'>
                        <Label className='form-label' for={`postal-code-${type}`}>
                            Postal Code
                        </Label>
                        <Input
                            type='text'
                            name={`postal-code-${type}`}
                            id={`postal-code-${type}`}
                            placeholder='Postal Code'
                            aria-label='Postal Code'
                        />
                    </Col>
                </Row>
                {/* 4 */}
                <Row>
                    <Col md='10' className='mb-1 inline-flex'>
                        <Label md="2" className='form-label' for={`taxId-${type}`}>
                            NPWP or Tax ID
                        </Label>
                        <Input
                            type='text'
                            name={`taxId-${type}`}
                            id={`taxId-${type}`}
                            placeholder='NPWP or Tax ID'
                            aria-label='NPWP or Tax ID'
                        />
                    </Col>
                    <Col md='2' className='mb-1'>
                        <Button color='primary' className='btn-next' tag={Label}>
                            Upload
                            <Input type='file' onChange={onChange} hidden accept='image/*' />
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col md='10' className='mb-1 inline-flex'>
                        <Label md="2" className='form-label' for={`nib-reg-${type}`}>
                            NIB Reg. No.
                        </Label>
                        <Input
                            type='text'
                            name={`nib-reg-${type}`}
                            id={`nib-reg-${type}`}
                            placeholder='NIB Registration Number'
                            aria-label='NIB Registration Number'
                        />
                    </Col>
                    <Col md='2' className='mb-1'>
                        <Button color='primary' className='btn-next' tag={Label}>
                            Upload
                            <Input type='file' onChange={onChange} hidden accept='image/*' />
                        </Button>
                    </Col>
                </Row>
                {/* 5 */}
                <Row>
                    <Col md='6' className='mb-1'>
                        <Label className='form-label' for={`email-${type}`}>
                            Company Email
                        </Label>
                        <Input
                            type='text'
                            name={`email-${type}`}
                            id={`email-${type}`}
                            placeholder='Company Email'
                            aria-label='Company Email'
                        />
                    </Col>
                    <Col md='6' className='mb-1'>
                        <Label className='form-label' for={`phone-${type}`}>
                            Company Phone
                        </Label>
                        <Input
                            type='text'
                            name={`phone-${type}`}
                            id={`phone-${type}`}
                            placeholder='Company Phone'
                            aria-label='Company Phone'
                        />
                    </Col>
                </Row>
                {/* 6 */}
                <Row>
                    <Col md='6' className='mb-1'>
                        <Label className='form-label' for={`brand-${type}`}>
                            Product/Brand
                        </Label>
                        <Input
                            type='text'
                            name={`brand-${type}`}
                            id={`brand-${type}`}
                            placeholder='Product / Brand'
                            aria-label='Product / Brand'
                        />
                    </Col>
                    <Col md='6' className='mb-1'>
                        <Label className='form-label' for={`email-${type}`}>
                            Business Line
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
                </Row>
                {/* 7 */}
                <Row className='d-flex align-items-center'>
                    <Col md='10' className='mb-1'>
                        <Label className='form-label' for={`email-${type}`}>
                            Business Area Coverage
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
                    <Col md='2' className='mb-1 mt-1'>
                        <Button color='primary' className='btn-next' onClick={() => stepper.next()}>
                            <span className='align-middle d-sm-inline-block d-none'>Add</span>
                            <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    </>);
}

export default InputCompany;