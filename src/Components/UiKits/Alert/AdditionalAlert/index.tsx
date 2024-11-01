import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { AdditionalAlertTitle } from '@/Constant'
import { AdditionalAlertData, AdditionalAlertSubTitle } from '@/Data/Uikits/Alert'
import React from 'react'
import { Alert, Card, CardBody, Col } from 'reactstrap'

export const AdditionalAlert = () => {
    return (
        <Col sm="12">
            <Card>
                <CommonCardHeader title={AdditionalAlertTitle} span={AdditionalAlertSubTitle} />
                <CardBody className='dark-alert'>
                    {AdditionalAlertData && AdditionalAlertData.map((item, index) => (
                        <Alert color={`light-${item.class}`} key={index}>
                            <h3 className={`alert-heading pb-2 text-${item.class}`} >{item.head}</h3>
                            <p>{item.text}</p>
                            <hr />
                            <p className="mb-0">{item.subtext}</p>
                        </Alert>
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}
