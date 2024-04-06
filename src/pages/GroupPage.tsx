import { memo } from 'react'
import { Badge, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { GroupCard } from 'src/components/GroupCard'
import { Empty } from 'src/components/Empty'
import { ContactCard } from 'src/components/ContactCard'
import { useAppSelector } from 'src/redux/hooks'

export const GroupPage = memo(() => {
  // stored data
  const contacts = useAppSelector((state) => state.contacts)
  const groups = useAppSelector((state) => state.groups)
  const { groupId } = useParams<{ groupId: string }>()
  const group = groups.find(({ id }) => id === groupId)
  return (
    <Row className="g-4">
      {group ? (
        <>
          <GroupCard group={group} />
          <h3>
            members: <Badge bg="secondary">{group.contactIds.length}</Badge>
          </h3>
          <Col>
            <Row xxl={4} className="g-4">
              {contacts.map((contact) => (
                <Col key={contact.id}>
                  <ContactCard contact={contact} withLink />
                </Col>
              ))}
            </Row>
          </Col>
        </>
      ) : (
        <Empty />
      )}
    </Row>
  )
})
