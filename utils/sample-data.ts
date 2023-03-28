import { ITabsLayoutProps } from '../components/TabsAlternative'

/** Dummy data but with real datawrapper urls */
export const getTabsSample1: () => ITabsLayoutProps['tabs'] = () => [
  {
    tab: {
      title: 'what',
      items: [
        {
          title: 'Fig 1: US total rig count',
          url: 'https://datawrapper.dwcdn.net/N1tfU/embed.js',
          type: 'script',
          source: 'Energy Aspects | Baker Hughes',
          color: 'White',
          overflowScroll: true,
          expand: true,
          fullHeight: true,
        },
      ],
    },
    key: Math.random() * 10,
  },
]

export const getTabsSample2: () => ITabsLayoutProps['tabs'] = () => [
  {
    tab: {
      title: 'what',
      items: [
        {
          title: 'Fig 11: US total rig count',
          url: 'https://datawrapper.dwcdn.net/N1tfU/embed.js',
          type: 'script',
          source: '',
          color: 'White',
          overflowScroll: true,
          expand: true,
          fullHeight: true,
        },
      ],
    },
    key: Math.random() * 10,
  },
  {
    tab: {
      title: 'what',
      items: [
        {
          title: 'Test',
          url: 'https://datawrapper.dwcdn.net/N1tfU/embed.js',
          type: 'script',
          source: 'Energy Aspects | Baker Hughes',
          color: 'White',
          overflowScroll: true,
          expand: true,
          fullHeight: true,
        },
      ],
    },
    key: Math.random() * 10,
  },
]

export const getTabsSample3: () => ITabsLayoutProps['tabs'] = () => [
  {
    tab: {
      title: 'what',
      items: [
        {
          title: 'Another One',
          url: 'https://datawrapper.dwcdn.net/Eqrb5/embed.js?v=1',
          source: '',
          color: 'White',
          overflowScroll: false,
          expand: false,
          fullHeight: false,
        },
      ],
    },
    key: Math.random() * 10,
  },
]
