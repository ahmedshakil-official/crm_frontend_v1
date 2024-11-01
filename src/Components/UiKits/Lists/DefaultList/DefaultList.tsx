import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { DefaultListTitle } from '@/Constant'
import { DefaultListSubTitle } from '@/Data/Uikits/Lists'
import { Card, CardBody, Col, ListGroup, ListGroupItem } from 'reactstrap'

export const DefaultList=()=> {
    return (
        <Col xxl="4" md="6">
            <Card>
                <CommonCardHeader title={DefaultListTitle} span={DefaultListSubTitle} />
                <CardBody>
                    <ListGroup>
                        <ListGroupItem> <i className="iconly-Arrow-Right-3 icli" />{'Logo Design'}</ListGroupItem>
                        <ListGroupItem> <i className="iconly-Arrow-Right-3 icli" />{'Web Design & Development'}</ListGroupItem>
                        <ListGroupItem> <i className="iconly-Arrow-Right-3 icli" />{'E-Commerce'}</ListGroupItem>
                        <ListGroupItem> <i className="iconly-Arrow-Right-3 icli" />{'SEO'}</ListGroupItem>
                    </ListGroup>
                </CardBody>
            </Card>
        </Col>
    )
}
