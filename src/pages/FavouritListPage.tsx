import { memo } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { useAppSelector } from 'src/redux/hooks'

export const FavouritListPage = memo(() => {
  // stored data
  const contacts = useAppSelector((state) => state.contacts)
  return (
    <Row xxl={4} className="g-4">
      {contacts
        .filter((cn) => cn.favorite)
        .map((contact) => (
          <Col key={contact.id}>
            <ContactCard contact={contact} withLink />
          </Col>
        ))}
    </Row>
  )
})
