import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { BadgeIconTitle } from '@/Constant'
import { BadgeIconData, BadgeWithIconSubTitle } from '@/Data/Uikits/Tag&Pills'
import { Badge, Card, CardBody, Col } from 'reactstrap'

export const BadgeWithIcon=()=> {
    return (
        <Col sm="12" xl="6">
            <Card>
                <CommonCardHeader title={BadgeIconTitle} span={BadgeWithIconSubTitle} />
                <CardBody>
                    <div className='badge-spacing'>
                        {BadgeIconData && BadgeIconData.map((item) => (
                            <Badge color={item.color} className={`${item.id === 1 ? 'text-light' : ''} ${item.id === 7 ? 'text-dark' : ''}`} key={item.id}>
                                {item.iconName}
                            </Badge>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
