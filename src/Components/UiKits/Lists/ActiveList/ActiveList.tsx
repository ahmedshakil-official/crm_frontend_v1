import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { ActiveListTitle } from '@/Constant'
import { ActiveListSubTitle } from '@/Data/Uikits/Lists'
import { Card, CardBody, Col, ListGroup, ListGroupItem } from 'reactstrap'

export const ActiveList=()=> {
    return (
        <Col xxl="4" md="6">
            <Card>
                <CommonCardHeader title={ActiveListTitle} span={ActiveListSubTitle} />
                <CardBody>
                    <ListGroup>
                        <ListGroupItem className=" active bg-warning-light"><i className="iconly-Arrow-Right-3 icli" /> {'UI Kits'}</ListGroupItem>
                        <ListGroupItem><i className="iconly-Arrow-Right-3 icli" /> {'Wow Animations'}</ListGroupItem>
                        <ListGroupItem> <i className="iconly-Arrow-Right-3 icli" /> {'Apex Charts'}</ListGroupItem>
                        <ListGroupItem><i className="iconly-Arrow-Right-3 icli" /> {'Starter Kits'}</ListGroupItem>
                    </ListGroup>
                </CardBody>
            </Card>
        </Col>
    )
}