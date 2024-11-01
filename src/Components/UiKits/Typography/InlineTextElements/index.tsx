import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { InlineTextElementsTitle } from '@/Constant'
import { InlineTextSubTitle } from '@/Data/Uikits/Typography'
import { Card, CardBody, Col } from 'reactstrap'

export const InlineTextElements = () => {
    return (
        <Col xl="12" xxl="6">
            <Card>
                <CommonCardHeader title={InlineTextElementsTitle} span={InlineTextSubTitle} />
                <CardBody>
                    <div className='d-flex flex-column gap-2'>
                        <p className="mb-0">{'You can use the mark tag to'}<mark>{' highlight '}</mark>{'text.'}</p>
                        <p className="mb-0"><del>{'This line of text is meant to be treated as deleted text.'}</del></p>
                        <p className="mb-0"><s>{'This line of text is meant to be treated as no longer accurate.'}</s></p>
                        <p className="mb-0"><u>{'This line of text will render as underlined'}</u> </p>
                        <p className="mb-0"><small>{'This line of text is meant to be treated as fine print.'}</small></p>
                        <p className="mb-0"><strong>{'This line rendered as bold text.'}</strong></p>
                        <p className="mb-0"><em>{'This line rendered as italicized text.'}</em></p>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
