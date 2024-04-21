import { memo } from 'react'
import { Col, Row } from 'react-bootstrap'
import { GroupCard } from 'src/components/GroupCard'
import { useAppSelector } from 'src/redux/hooks'
import { IGroup } from 'src/types/IGroup'

export const GroupListPage = memo(() => {
  const groups: IGroup[] = useAppSelector((state) => state.groups.arrGroups)
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
