import { memo } from 'react'
import { Badge, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { ContactCard } from 'src/components/ContactCard'
import { Empty } from 'src/components/Empty'
import { GroupCard } from 'src/components/GroupCard'
import { useAppSelector } from 'src/redux/hooks'

export const ContactPage = memo(() => {
  const groups = useAppSelector((state) => state.groups)
  const contacts = useAppSelector((state) => state.contacts)
  const { contactId } = useParams<{ contactId: string }>()
  const contact = contacts.find(({ id }) => id === contactId)
  return (
    <>
      {contact ? (
        <>
          <ContactCard contact={contact} />
          <h3>
            in groups:{' '}
            <Badge bg="secondary">
              {
                groups.filter(({ contactIds }) =>
                  contactIds.includes(contact.id)
                ).length
              }
            </Badge>
          </h3>
          <Row xxl={4} className="g-4">
            {groups
              .filter(({ contactIds }) => contactIds.includes(contact.id))
              .map((group) => (
                <Col key={group.id}>
                  <GroupCard group={group} withLink />
                </Col>
              ))}
          </Row>
        </>
      ) : (
        <Empty />
      )}
    </>
  )
})
