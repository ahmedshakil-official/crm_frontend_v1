import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { Href, WithIconBreadcrumbTitle } from '@/Constant'
import { WithIconBreadcrumbSubTitle } from '@/Data/BonusUi/Breadcrumb'
import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from 'reactstrap'

export const WithIconBreadcrumb=()=> {
    return (
        <Col sm="6">
            <Card>
                <CommonCardHeader title={WithIconBreadcrumbTitle} span={WithIconBreadcrumbSubTitle} />
                <CardBody>
                    <Breadcrumb className='breadcrumb-icon mb-3' listClassName='bg-white p-l-0 mb-0'>
                        <BreadcrumbItem><a href={Href}><i className="iconly-Home icli" /></a></BreadcrumbItem>
                        <BreadcrumbItem active>{'Ui Kits'}</BreadcrumbItem>
                    </Breadcrumb>
                    <Breadcrumb className='breadcrumb-icon breadcrumb-style4 mb-0' listClassName='bg-white m-b-0 p-b-0 p-l-0 mb-0'>
                        <BreadcrumbItem><a href={Href}><i className="iconly-Home icli" /></a></BreadcrumbItem>
                        <BreadcrumbItem href={Href}>{'Ui Kits'}</BreadcrumbItem>
                        <BreadcrumbItem active>{'Avatars'}</BreadcrumbItem>
                    </Breadcrumb>
                </CardBody>
            </Card>
        </Col>
    )
}
