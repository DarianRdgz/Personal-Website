// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router';

import HomePage from '../components/Home.vue';
import GamePg from '../components/Games.vue';
import ServePg from '../components/Services.vue';
import PubPg from '../components/Publications.vue';
import AboutFoo from '../components/AboutFoo.vue';
import DarianRdgz from '../components/DarianRodriguez.vue';
import SurveyPg from '../components/Surveys.vue';
import ContactUs from '../components/ContactUs.vue';
import AccountPg from '../components/AccountPg.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/games', name: 'Games', component: GamePg },
  { path: '/services', name: 'Services', component: ServePg },
  { path: '/publications', name: 'Publications', component: PubPg },
  { path: '/about', name: 'AboutFoo', component: AboutFoo },
  { path: '/darian', name: 'Darian', component: DarianRdgz },
  { path: '/surveys', name: 'Surveys', component: SurveyPg },
  { path: '/contact', name: 'ContactUs', component: ContactUs },
  { path: '/account', name: 'AccountPg', component: AccountPg }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
