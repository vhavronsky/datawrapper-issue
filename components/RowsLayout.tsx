/* eslint-disable @typescript-eslint/no-explicit-any */
import { Row, Col } from 'react-bootstrap'

import { Chart } from './Chart'

interface IRowsLayoutProps {
  rows: any[]
}

export const RowsLayout: React.FC<IRowsLayoutProps> = ({ rows }) => {
  return (
    <div className="rows_layout">
      <div>
        {rows.map(({ row, key: parentRowKey }) => (
          <Row key={parentRowKey} className="parent_row">
            {row?.columns?.map(({ column, key }) => (
              <Col
                key={`col-${key}`}
                xl={row?.columns && row.columns.length % 2 !== 0 ? 12 : 6}
              >
                <Row key={`row-${key}`} className="child_row">
                  {column?.items?.map((item) => (
                    <Col
                      key={item.props.url || item.props.source}
                      className="child_column"
                    >
                      <Chart {...item.props} className="full-height" />
                    </Col>
                  ))}
                </Row>
              </Col>
            ))}
          </Row>
        ))}
      </div>
    </div>
  )
}
