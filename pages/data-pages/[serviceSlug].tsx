/* eslint-disable import/no-default-export */
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import Layout from '../../components/Layout'
import { TabsLayout } from '../../components/TabsLayout'

import 'bootstrap/dist/css/bootstrap.min.css'

const Chart: React.FC = () => {
  const router = useRouter()
  const { query } = router
  const slug = query.serviceSlug as string

  const [tabs, setTabs] = useState([])

  useEffect(() => {
    const fetchTabs = async () => {
      const result = slug
        ? await fetch(`/api/data-page?slug=${slug}`)
        : { json: () => ({ tabs: [] }) }
      const innerTabs = await result.json()

      setTabs(innerTabs.tabs)
    }

    fetchTabs()
  }, [slug])

  return (
    <Layout>
      <div>
        <TabsLayout tabs={tabs} />
      </div>
    </Layout>
  )
}

export default Chart
