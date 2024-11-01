import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { FontWeightTitle } from '@/Constant'
import { FontWeightSubTitle } from '@/Data/Uikits/Typography'
import { Card, CardBody, Col } from 'reactstrap'

export const FontWeight = () => {
    return (
        <Col xl="12">
            <Card>
                <CommonCardHeader title={FontWeightTitle} span={FontWeightSubTitle} />
                <CardBody className='d-flex flex-column gap-3'>
                    <h1 className="f-w-700">{'You can set bolder font weight Heading 1 using'}<code> {'f-w-700'}</code></h1>
                    <h2 className="f-w-600">{'You can set bold font weight Heading 2 using'}<code> {'f-w-600'}</code></h2>
                    <h3 className="f-w-500">{'You can set medium font weight Heading 3 using'}<code> {'f-w-500'}</code></h3>
                    <h4 className="f-w-400">{'You can set normal font weight Heading 4 using'}<code> {'f-w-400'}</code></h4>
                    <h5 className="f-w-300">{'You can set light font weight Heading 5 using'}<code> {'f-w-300'}</code></h5>
                </CardBody>
            </Card>
        </Col>
    )
}
