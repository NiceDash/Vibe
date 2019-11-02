import Dashboard from './pages/Dashboard';
import Buttons from './elements/Buttons';
import Alerts from './elements/Alerts';
import Grid from './elements/Grid';
import Typography from './elements/Typography';
import Cards from './elements/Cards';
import Tabs from './elements/Tabs';
import Tables from './elements/Tables';
import Breadcrumbs from './elements/Breadcrumbs';
import Forms from './elements/Forms';
import Loaders from './elements/Loaders';
import Avatars from './elements/Avatars';
import Invoice from './pages/Invoice';
import Analytics from './pages/Analytics';
import CmsPage from './pages/Cms';
import Widgets from './pages/Widgets';
import BlankPage from './pages/BlankPage';
import SubNav from './pages/SubNav';
import Feed from './pages/Feed';
import Modals from './elements/Modals';
import ProgressBars from './elements/ProgressBars';
import PaginationPage from './elements/Pagination';
import ErrorPage from './pages/404';

// See React Router documentation for details: https://reacttraining.com/react-router/web/api/Route
const pageList = [
  {
    name: 'Dashboard',
    path: '/home',
    component: Dashboard,
  },
  {
    name: 'Buttons',
    path: '/elements/buttons',
    component: Buttons,
  },
  {
    name: 'Alerts',
    path: '/elements/alerts',
    component: Alerts,
  },
  {
    name: 'Grid',
    path: '/elements/grid',
    component: Grid,
  },
  {
    name: 'Typography',
    path: '/elements/typography',
    component: Typography,
  },
  {
    name: 'Cards',
    path: '/elements/cards',
    component: Cards,
  },
  {
    name: 'Tabs',
    path: '/elements/tabs',
    component: Tabs,
  },
  {
    name: 'Tables',
    path: '/elements/tables',
    component: Tables,
  },
  {
    name: 'Progress Bars',
    path: '/elements/progressbars',
    component: ProgressBars,
  },
  {
    name: 'Pagination',
    path: '/elements/pagination',
    component: PaginationPage,
  },
  {
    name: 'Modals',
    path: '/elements/modals',
    component: Modals,
  },
  {
    name: 'Breadcrumbs',
    path: '/elements/breadcrumbs',
    component: Breadcrumbs,
  },
  {
    name: 'Forms',
    path: '/elements/forms',
    component: Forms,
  },
  {
    name: 'Loaders',
    path: '/elements/loaders',
    component: Loaders,
  },
  {
    name: 'Avatars',
    path: '/elements/avatars',
    component: Avatars,
  },
  {
    name: 'Blank',
    path: '/pages/blank',
    component: BlankPage,
  },
  {
    name: 'Sub Navigation',
    path: '/pages/subnav',
    component: SubNav,
  },
  {
    name: '404',
    path: '/pages/404',
    component: ErrorPage,
  },
  {
    name: 'Analytics',
    path: '/apps/analytics',
    component: Analytics,
  },
  {
    name: 'Activity Feed',
    path: '/apps/feed',
    component: Feed,
  },
  {
    name: 'Invoice',
    path: '/apps/invoice',
    component: Invoice,
  },
  {
    name: 'CMS',
    path: '/apps/cms',
    component: CmsPage,
  },
  {
    name: 'Widgets',
    path: '/widgets',
    component: Widgets,
  },
];

export default pageList;
