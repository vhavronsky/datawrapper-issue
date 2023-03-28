/* eslint-disable import/no-default-export */
/* eslint-disable no-nested-ternary */

import {
  getTabsSample1,
  getTabsSample2,
  getTabsSample3,
} from '../../utils/sample-data'

const dataPage = async (req, res) => {
  const slug = req.query?.slug

  const tabs =
    slug === 'first-dashboard'
      ? getTabsSample1()
      : slug === 'second-dashboard'
      ? getTabsSample2()
      : getTabsSample3()

  res.status(200).json({ tabs })
}

export default dataPage
