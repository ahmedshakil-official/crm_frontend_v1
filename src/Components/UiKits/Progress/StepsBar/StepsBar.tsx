import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { StepsBarTitle } from '@/Constant'
import { StepsBarTitleSubTitle } from '@/Data/Uikits/Progress'
import { Button, Card, CardBody, Col, Progress } from 'reactstrap'

export const StepsBar=()=> {
    return (
        <Col md="6">
            <Card  className='custom-steps-progress'>
                <CommonCardHeader title={StepsBarTitle} span={StepsBarTitleSubTitle} />
                <CardBody> 
                    <div className="position-relative m-4 progress-number">
                        <Progress className="progress-wrapper" value={50} />
                        <Button color="primary" size="sm" className="position-absolute top-0 start-0 translate-middle rounded-circle text-light">{'1'}</Button>
                        <Button color="primary" size="sm" className="position-absolute top-0 start-50 translate-middle rounded-circle text-light">{'2'}</Button>
                        <Button color="transparent" size="sm" className="progress-btn position-absolute top-0 start-100 translate-middle rounded-circle">{'3'}</Button>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
