import { createRouter, createWebHistory } from 'vue-router'

import GiftListPage from '../pages/GiftListPage.vue'
import GiftDetailPage from '../pages/GiftDetailPage.vue'
import ThanksPage from '../pages/ThanksPage.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition // restaure la position si on utilise précédent/suivant
    }
    return { top: 0 } // sinon on remonte en haut
  },
  routes: [
    {
      path: '/',
      component: GiftListPage,
    },
    {
      path: '/gift/:id',
      component: GiftDetailPage,
      props: true,
    },
    {
      path: '/thanks',
      component: ThanksPage,
    },
  ],
})

export default router