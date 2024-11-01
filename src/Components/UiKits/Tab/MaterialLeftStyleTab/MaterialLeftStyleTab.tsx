import React, { useState } from 'react'
import { Card, CardBody, Col, Nav, NavLink } from 'reactstrap';
import {MaterialContent} from './MaterialContent';
import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { Href, MaterialLeftStyleTabTitle } from '@/Constant';
import { MaterialLeftStyleNav, MaterialLeftSubTitle } from '@/Data/Uikits/Tabs';

export const MaterialLeftStyleTab=()=> {
    const [basicTab, setBasicTab] = useState('3');

    return (
        <Col xxl="6">
            <Card>
                <CommonCardHeader title={MaterialLeftStyleTabTitle} span={MaterialLeftSubTitle} />
                <CardBody>
                    <div className='tabs-responsive-side'>
                        <div className='material-wrapper'>
                            <div className='d-flex'>
                                <Nav className='flex-column nav-secondary nav-left border-tab'>
                                    {MaterialLeftStyleNav.map((item) => (
                                        <NavLink key={item.id} href={Href} className={`nav-effect ${basicTab === item.id ? 'active' : ''}`} onClick={() => setBasicTab(item.id)}>{item.nav}</NavLink>
                                    ))}
                                </Nav>
                            </div>
                            <div className='material-content'>
                                <MaterialContent tabId={basicTab} />
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}