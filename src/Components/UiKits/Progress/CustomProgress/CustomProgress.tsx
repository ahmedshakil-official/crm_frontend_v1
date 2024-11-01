import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { CustomProgressTitle } from '@/Constant'
import { CustomProgressData, CustomProgressSubTitle } from '@/Data/Uikits/Progress'
import { Fragment } from 'react'
import { Card, CardBody, Col, Progress, Row } from 'reactstrap'

export const CustomProgress=()=> {
    return (
        <Card>
            <CommonCardHeader span={CustomProgressSubTitle} title={CustomProgressTitle} />
            <CardBody className="progress-showcase">
                <Row>
                    <Col>
                        {CustomProgressData && CustomProgressData.map((item, index) => (
                            <Fragment key={index}>
                                <h6 className="mb-2">{item.text}</h6>
                                <Progress className={`mb-4 text-center ${item.class === 'dark' ? 'text-light' : ''}`}
                                    color={item.class} value={item.value} striped animated>
                                    {item.value}{'%'}
                                </Progress>
                            </Fragment>
                        ))}
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}
