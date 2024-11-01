import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { LiveAlertTitle, ShowLiveAlert } from '@/Constant';
import { LiveAlertSubTitle } from '@/Data/Uikits/Alert';
import { useState } from 'react';
import { Alert, Button, Card, CardBody, Col } from 'reactstrap';

export const LiveAlert = () => {
    const [data, setData] = useState<number[]>([])
    const removeValue = (item: number) => {
        setData(data.filter((value, index) => {
            return value !== item;
        }));
    }
    return (
        <Col xl="6">
            <Card>
                <CommonCardHeader title={LiveAlertTitle} span={LiveAlertSubTitle} />
                <CardBody className='live-dark'>
                    {data.map((item: number, index: number) => (
                        <Alert color='light' toggle={() => { removeValue(item) }} key={index}>
                            <p className='text-dark'>{'Nice, you triggered this alert message!'}</p>
                        </Alert>
                    ))}
                    <Button color='dark' onClick={() => { setData((prev) => [...prev, prev.length + 1]) }}>{ShowLiveAlert}</Button>
                </CardBody>
            </Card>
        </Col>
    )
}
