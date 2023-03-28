/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

import { RowsLayout } from './RowsLayout'

interface ITabsLayoutProps {
  tabs: any[]
}

export const TabsLayout: React.FC<ITabsLayoutProps> = ({ tabs }) => (
  <Tabs variant="tabs" className="ea-tabs mb-3">
    {tabs?.map(({ tab, key }) => {
      return (
        <Tab eventKey={key} title={tab.title} key={key} tabClassName="ea-tab">
          <RowsLayout rows={tab.rows || []} key={`${key}-rows`} />
        </Tab>
      )
    })}
  </Tabs>
)
