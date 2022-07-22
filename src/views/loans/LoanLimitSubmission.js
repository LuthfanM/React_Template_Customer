import { useRef, useState } from 'react'
import Wizard from '@components/wizard'
import CompanyBackground from './form/LoanLimitSubmission/CompanyBackground'
import CompanyInformation from './form/LoanLimitSubmission/CompanyInformation'
import LoanLimitSubmitted from './form/LoanLimitSubmission/LoanLimitSubmitted'
import FinancialDocuments from './form/LoanLimitSubmission/FinancialDocuments'
import Breadcrumbs from '@components/breadcrumbs'
import { PG_LOAN_LIMIT_REQ } from '../../utility/Constants'
import CompanyDocuments from './form/LoanLimitSubmission/Company-Background-Document/CompanyDocuments'
import CompanyStructure from './form/LoanLimitSubmission/Company-Background-Structure/CompanyStructure'

const LoanLimitSubmission = () => {
    const ref = useRef(null)

    // ** State
    const [stepper, setStepper] = useState(null)

    const steps = [
        {
            id: 'company-background',
            title: 'Company Background',
            subtitle: 'Company Background',
            content: <CompanyBackground stepper={stepper} type='wizard-vertical' />
        },
        {
            id: 'company-background-document',
            title: 'Company Background Document',
            subtitle: 'Company Background Document',
            content: <CompanyDocuments stepper={stepper} type='wizard-vertical' />
        },
        {
            id: 'company-background-structure',
            title: 'Company Background Structure',
            subtitle: 'Company Background Structure',
            content: <CompanyStructure stepper={stepper} type='wizard-vertical' />
        },
        {
            id: 'company-information',
            title: 'Company Information',
            subtitle: 'Add Company Information',
            content: <CompanyInformation stepper={stepper} type='wizard-vertical' />
        },
        {
            id: 'financial-documents',
            title: 'Financial Documents',
            subtitle: 'Financial Documents',
            content: <FinancialDocuments stepper={stepper} type='wizard-vertical' />
        },
        {
            id: 'loan-limit-submitted',
            title: 'Confirmation Data',
            subtitle: 'Confirm Input',
            content: <LoanLimitSubmitted stepper={stepper} type='wizard-vertical' />
        }
    ]

    return (
        <>
            <Breadcrumbs title={PG_LOAN_LIMIT_REQ} data={[{ title: 'Pages' }, { title: 'Account Settings' }]} />
            <div className='vertical-wizard'>
                <Wizard
                    type='vertical'
                    ref={ref}
                    steps={steps}
                    options={{
                        linear: false
                    }}
                    instance={el => setStepper(el)}
                />
            </div>
        </>
    );
}

export default LoanLimitSubmission;