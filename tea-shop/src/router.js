import PageIndex from './components/PageIndex'
import PageShop from './components/PageShop'
import PageAbout from './components/PageAbout'
import PageContact from './components/PageContact'

const router = new VueRouter({
    routes:[
      {
        path: '/',
        component: PageIndex
      },
      {
        path: '/shop',
        component: PageShop
      },
      {
        path: '/about',
        component: PageAbout
      },
      {
        path: '/contact',
        component: PageContact
      }
    ]
  })