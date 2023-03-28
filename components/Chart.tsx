/* eslint-disable import/no-extraneous-dependencies */
import classNames from 'classnames'
import { useRef } from 'react'

import { DataWrapperChartScript } from './DataWrapperChartScript'

export interface OnExpandParams {
  title?: string
  source?: string
  url: string
  color: string
  overflowScroll?: boolean
}

type OnExpandType = (params: OnExpandParams) => void

export interface ChartProps extends OnExpandParams {
  onExpand?: OnExpandType
  className?: string
  variant?: 'standard' | 'fullHeight'
  datasetUrl?: string
  fullHeight?: boolean
}

export const Chart: React.FC<ChartProps> = ({
  title,
  source,
  url,
  datasetUrl,
  fullHeight,
}) => {
  return (
    <>
      {title && (
        <h3
          className={classNames('chart_title mb-2', {
            'pe-6': !!datasetUrl,
          })}
          title={title}
        >
          {title}
        </h3>
      )}
      <div
        className={classNames('chart_datawrapper position-relative', {
          'chart_off-height': fullHeight,
          'mb-2': !!source,
        })}
      >
        <DataWrapperChartScript url={url} />
      </div>
      {source && <p className="chart_aaasource">{source}</p>}
    </>
  )
}
