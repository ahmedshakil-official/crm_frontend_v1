import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { LeftBorderAlertTitle } from '@/Constant';
import { LeftBorderAlertSubTitle } from '@/Data/Uikits/Alert';
import React, { useState } from 'react'
import { Alert, Card, CardBody, Col } from 'reactstrap';

export const LeftBorderAlert = () => {
    const [active, setActive] = useState(true);
    const onDismiss = () => setActive(false)

    return (
        <Col xl="6">
            <Card>
                <CommonCardHeader title={LeftBorderAlertTitle} span={LeftBorderAlertSubTitle} />
                <CardBody className='live-dark'>
                    <Alert color='light-dark' isOpen={active} toggle={onDismiss} className='light text-dark border-left-wrapper mb-0'>
                        <i className="fa-solid fa-circle-info" />
                        <p className="mb-0">{'You can check in on some of those fields below.'}</p>
                    </Alert>
                </CardBody>
            </Card>
        </Col>
    )
}
