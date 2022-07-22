import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Stepper, Step } from 'react-form-stepper';
import { Card, CardHeader, CardBody, CardTitle, CardText, Input, Label, Button } from 'reactstrap'
import LoanLimitSubmission from './LoanLimitSubmission';
import CompanyCustomerProfile from './form/CompanyCustomerProfile';
import CustomerRegistrationSubmit from './form/CustomerRegistrationSubmit';
import { PATH_CONFIRMATION } from '../../navigation/path';
import { useNavigate } from 'react-router-dom';
import "../../@core/scss/react/custom/customer-registration.scss";
import OfferingLoan from './MyLoanRequest/OfferingLoan';

const LoanLimitRequest = () => {
    const [loanStatus, setLoanStatus] = useState(false);
    return (<>
    {
        loanStatus?
        <OfferingLoan />:<LoanLimitSubmission />
    }
    </>);
}

export default LoanLimitRequest;