import { memo, useState } from 'react'
import { Col, Form, InputGroup, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { useAppSelector } from 'src/redux/hooks'
import { IContact } from 'src/types/IContact'
import { IGroup } from 'src/types/IGroup'

export const ContactListPage = memo(() => {
  // stored data
  const contacts: IContact[] = useAppSelector((state) => state.contacts.arrContacts)
  const groups: IGroup[] = useAppSelector((state) => state.groups.arrGroups)
  // local state for filter form values
  const [filterName, setFilterName] = useState<string>('')
  const [filterGroup, setFilterGroup] = useState<string>('')

  // complex filter logic for groups
  let fgroupsContactIds: IContact['id'][] = []
  function updateFgroupsContactIds() {
    fgroupsContactIds = []
    if (groups && groups.length > 0) {
      const fgroups = groups.filter((gr) =>
        gr.name.toLowerCase().includes(filterGroup)
      )
      if (fgroups.length > 0) {
        fgroups.forEach((gr) => fgroupsContactIds.push(...gr.contactIds))
      }
    }
  }
  updateFgroupsContactIds()

  // filter function
  function filteredContacts(cn: IContact): boolean {
    return (
      (!filterName || cn.name.toLowerCase().includes(filterName)) &&
      (!filterGroup || fgroupsContactIds.includes(cn.id))
    )
  }

  return (
    <>
      <Row xxl={1}>
        <Col className="mb-3">
          <InputGroup className="mb-3">
            <InputGroup.Text id="contact-name">Contact filter</InputGroup.Text>
            <Form.Control
              id="contact-name-filter"
              placeholder="Contact name"
              aria-label="Contact name"
              aria-describedby="contact-name"
              onChange={(e) => {
                setFilterName(e.currentTarget.value.toLowerCase().trim())
              }}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="group-name">Group filter</InputGroup.Text>
            <Form.Control
              id="group-name-filter"
              placeholder="Group name"
              aria-label="Group name"
              aria-describedby="group"
              onChange={(e) =>
                setFilterGroup(e.currentTarget.value.toLowerCase().trim())
              }
            />
          </InputGroup>
        </Col>
      </Row>
      <Row xxl={1}>
        <Col>
          <Row xxl={4} className="g-4">
            {contacts &&
              contacts.filter(filteredContacts).map((contact) => (
                <Col key={contact.id}>
                  <ContactCard contact={contact} withLink />
                </Col>
              ))}
          </Row>
        </Col>
      </Row>
    </>
  )
})
