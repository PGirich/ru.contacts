import React, { memo, useState } from 'react'
import { CommonPageProps } from './types'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { FilterForm, FilterFormValues } from 'src/components/FilterForm'
import { ContactDto } from 'src/types/dto/ContactDto'
import { useAppSelector } from 'src/redux/hooks'
import { IContact } from 'src/types/IContact'

export const ContactListPage = memo(() => {
    const contacts = useAppSelector((state) => state.contacts)
    const dataModified = useAppSelector((state) => state.dataModified)
    const [filterName, setFilterName] = useState('')
    const filteredContacts = (cn: IContact): boolean => {
      return cn.name.toLowerCase().includes(filterName) 
    };
    const onSubmit = (fv: Partial<FilterFormValues>) => {
      if (fv.name) setFilterName(fv.name.toLowerCase().trim());
      }


      let findContacts: IContact[] = contacts[0]
if (fv.name) {}
        const fvName = fv.name.toLowerCase()
        findContacts = findContacts.filter(
          ({ name }) => name.toLowerCase().indexOf(fvName) > -1
        )
      }

      if (fv.groupId) {
        const groupContacts = groupContactsState[0].find(
          ({ id }) => id === fv.groupId
        )

        if (groupContacts) {
          findContacts = findContacts.filter(({ id }) =>
            groupContacts.contactIds.includes(id)
          )
        }
      }

      setContacts(findContacts)
    }

    return (
      <>
        <Row xxl={1}>
          <Col className="mb-3">
            <FilterForm
              groupContactsList={groupContactsState[0]}
              initialValues={{}}
              onSubmit={onSubmit}
            />
          </Col>
        </Row>
        <Row xxl={1}>
          <Col>
            <Row xxl={4} className="g-4">
              {contacts.filter(filteredContacts).map((contact) => (
                <Col key={contact.id}>
                  <ContactCard contact={contact} withLink />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </>
    )
  }
)
