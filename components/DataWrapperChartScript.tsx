import { useEffect, useRef } from 'react'

interface IDataWrapperChartScriptProps {
  url: string
  onLoad?: VoidFunction
}

export const DataWrapperChartScript = ({
  url,
  onLoad,
}: IDataWrapperChartScriptProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement('script')

    script.src = url
    script.defer = true
    if (onLoad) script.onload = onLoad

    const container = containerRef.current

    container?.appendChild(script)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div ref={containerRef} />
}
