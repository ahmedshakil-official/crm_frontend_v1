import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { Href, SimpleBreadcrumbTitle } from '@/Constant'
import { SimpleBreadcrumbSubTitle } from '@/Data/BonusUi/Breadcrumb'
import React from 'react'
import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from 'reactstrap'

export const SimpleBreadcrumb=()=> {
    return (
        <Col sm="6">
            <Card>
                <CommonCardHeader title={SimpleBreadcrumbTitle} span={SimpleBreadcrumbSubTitle} />
                <CardBody>
                    <Breadcrumb className='mb-0' listClassName='mb-1'>
                        <BreadcrumbItem><a href={Href}><i className="iconly-Home icli pe-1" /></a>{'Home'}</BreadcrumbItem>
                        <BreadcrumbItem>{'Bonus Ui'}</BreadcrumbItem>
                        <BreadcrumbItem>{'Rating'}</BreadcrumbItem>
                    </Breadcrumb>
                    <Breadcrumb className='mb-0' listClassName='breadcrumb-style3 mb-0'>
                        <BreadcrumbItem><a href={Href}><i className="iconly-Home icli pe-1" /></a>{'Home'}</BreadcrumbItem>
                        <BreadcrumbItem><a href={Href}><i className="iconly-Info-Circle icli pe-1" /></a>{'FAQ'}</BreadcrumbItem>
                    </Breadcrumb>
                </CardBody>
            </Card>
        </Col>
    )
}
