/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { Col, Row } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

import { Chart } from './Chart'

export interface ITabsLayoutProps {
  tabs: {
    tab: {
      title: string
      items: {
        title: string
        url: string
        source: string
        color: string
        overflowScroll: boolean
        expand: boolean
        fullHeight: boolean
      }[]
    }
    key: string | number
  }[]
}

export const TabsLayout: React.FC<ITabsLayoutProps> = ({ tabs }) => (
  <Tabs variant="tabs" className="ea-tabs mb-3">
    {tabs?.map(({ tab, key }) => (
      <Tab eventKey={key} title={tab.title} key={key} tabClassName="ea-tab">
        <Row key={`row-${key}`} className="child_row">
          {tab?.items?.map((item) => (
            <Col key={item.url || item.source} className="child_column">
              <Chart {...item} className="full-height" />
            </Col>
          ))}
        </Row>
      </Tab>
    ))}
  </Tabs>
)
