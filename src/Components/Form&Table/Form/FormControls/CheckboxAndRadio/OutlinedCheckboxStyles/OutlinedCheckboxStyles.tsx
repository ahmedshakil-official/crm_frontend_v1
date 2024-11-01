import React from 'react'
import { Card, CardBody, Col, Input, Label } from 'reactstrap'
import { Checked, CheckedSuccessRadio, DarkRadio, OutlinedCheckboxStylesTitle, SingleToggle } from '@/Constant'
import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { RadioToggleButtonsSubTitle } from '@/Data/Form&Table/Form/FormControls'

export const OutlinedCheckboxStyles = () =>  {
    return (
        <Col md="6">
            <Card>
                <CommonCardHeader title={OutlinedCheckboxStylesTitle} span={RadioToggleButtonsSubTitle} />
                <CardBody className="common-flex main-checkbox-toggle outline-chackbox">
                    <Input className="btn-check" id="btn-check-outlined" type="checkbox" />
                    <Label className="btn btn-outline-info" htmlFor="btn-check-outlined">{SingleToggle}</Label>
                    <Input className="btn-check" id="btn-check-2-outlined" type="checkbox" defaultChecked />
                    <Label className="btn btn-outline-danger text-white" htmlFor="btn-check-2-outlined">{Checked}</Label>
                    <Input className="btn-check" id="success-outlined" type="radio" name="options-outlined" defaultChecked />
                    <Label className="btn btn-outline-success" htmlFor="success-outlined">{CheckedSuccessRadio}</Label>
                    <Input className="btn-check" id="danger-outlined" type="radio" name="options-outlined" />
                    <Label className="btn btn-outline-dark" htmlFor="danger-outlined"> {DarkRadio}</Label>
                </CardBody>
            </Card>
        </Col>
    )
}