import { memo } from 'react'
import { Col, Row } from 'react-bootstrap'
import { GroupCard } from 'src/components/GroupCard'
import { useAppSelector } from 'src/redux/hooks'

export const GroupListPage = memo(() => {
  const groups = useAppSelector((state) => state.groups)
  return (
    <Row xxl={4}>
      {groups.map((group) => (
        <Col key={group.id}>
          <GroupCard group={group} withLink />
        </Col>
      ))}
    </Row>
  )
})
