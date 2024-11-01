import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { FlushListTitle } from '@/Constant'
import { FlushListSubTitle } from '@/Data/Uikits/Lists'
import React from 'react'
import { Card, CardBody, Col, ListGroup, ListGroupItem } from 'reactstrap'

export const FlushList=()=> {
    return (
        <Col xxl="4" md="12">
            <Card>
                <CommonCardHeader title={FlushListTitle} span={FlushListSubTitle} />
                <CardBody>
                    <ListGroup flush>
                        <ListGroupItem><i className="iconly-Arrow-Right-3 icli"> </i>{'PRODUCT'}</ListGroupItem>
                        <ListGroupItem><i className="iconly-Arrow-Right-3 icli"> </i>{'PRODUCT DETAILS'}</ListGroupItem>
                        <ListGroupItem><i className="iconly-Arrow-Right-3 icli"> </i>{'CART'}</ListGroupItem>
                        <ListGroupItem><i className="iconly-Arrow-Right-3 icli"> </i>{'CHECKOUT'}</ListGroupItem>
                    </ListGroup>
                </CardBody>
            </Card>
        </Col>
    )
}
