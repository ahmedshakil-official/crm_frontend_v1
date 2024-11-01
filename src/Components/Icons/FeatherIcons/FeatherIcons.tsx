import { Card, Col, Container, Row } from 'reactstrap'
import { FeatherIcons, Icons } from '@/Constant'
import FeatherIconCardBody from './FeatherIconCardBody'
import Breadcrumbs from '@/CommonComponent/Breadcrumbs'
import CommonCardHeader from '@/CommonComponent/CommonCardHeader'

const FeatherIconsContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={FeatherIcons} parent={Icons} />
      <Container fluid>
        <Row className='icon-main'>
          <Col xl="12">
            <Card>
              <CommonCardHeader title={FeatherIcons} headClass='f-w-700' />
              <FeatherIconCardBody />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default FeatherIconsContainer