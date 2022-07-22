// ** Custom Components
import AvatarGroup from '@components/avatar-group'
import avatar1 from '@src/assets/images/portrait/small/avatar-s-11.jpg'

// ** Icons Imports
import { MoreVertical, Edit, Trash } from 'react-feather'

// ** Reactstrap Imports
import { Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import MainCard from '@layouts/components/custom/MainCard'
import Breadcrumbs from '@components/breadcrumbs'
import { PG_MY_LOAN_REQ } from '../../../utility/Constants'

const avatarGroupData1 = [
  {
    title: 'Leslie',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Quinn',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Quinn',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  }
]

const MyLoanRequest = () => {
  return (<>
    <Breadcrumbs title={PG_MY_LOAN_REQ} data={[{ title: 'Pages' }, { title: 'Account Settings' }]} />
      <MainCard>
    <Table bordered responsive>
      <thead className='table-dark'>
        <tr>
          <th>Job Number</th>
          <th>Company Name</th>
          <th>Submit Date & Time</th>
          <th>Business Account</th>
          <th>Credit Limit Request</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img className='me-75' src={avatar1} alt='angular' height='20' width='20' />
            <span className='align-middle fw-bold'>Angular Project</span>
          </td>
          <td>Peter Charles</td>
          <td>
            <AvatarGroup data={avatarGroupData1} />
          </td>
          <td>
            <Badge pill color='light-primary' className='me-1'>
              Active
            </Badge>
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='me-50' size={15} /> <span className='align-middle'>Edit</span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='me-50' size={15} /> <span className='align-middle'>Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
      </tbody>
    </Table>
    </MainCard>
    </>
  )
}

export default MyLoanRequest
