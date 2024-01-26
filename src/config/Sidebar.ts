import { ROUTES } from '../constants/routes';

const Menus = [
  {
    id: 1,
    submenu: true,
    link: ROUTES.USERS,
     title: 'Users',
    submenuItems: [
      { title: 'Users Management', link: ROUTES.USERS_USER, params: '' },
      { title: 'Roles Management', link: ROUTES.USERS_ROLE, params: '' },
    ],
    params:'',
  },
  {
    id: 2,
    submenu: true,
    link: ROUTES.MASTER,
     title: 'Master',
    submenuItems: [
      { title: 'Branch Master', link: ROUTES.MASTER_BRANCH, params: '' },
      { title: 'Client Master', link: ROUTES.MASTER_CLIENT, params: '' },
      { title: 'Courier Master', link: ROUTES.MASTER_COURIER, params: '' },
      { title: 'Menu Master', link: ROUTES.MASTER_MENU, params: '' },
      { title: 'PickList Master', link: ROUTES.MASTER_PICKLIST, params: '' },
      { title: 'Role Master', link: ROUTES.MASTER_ROLE, params: '' },
      { title: 'Project Master', link: ROUTES.MASTER_PROJECT, params: '' },
      { title: 'Template Master', link: ROUTES.MASTER_TEMPLATE, params: '' },
    ],
    params:'',
  },
  // {
  //   id: 3,
  //   submenu: true,
  //   link: ROUTES.USERS,
  //    title: 'Users',
  //   submenuItems: [
  //     { title: 'Users Management', link: ROUTES.USERS_USER, params: '' },
  //     { title: 'Roles Management', link: ROUTES.USERS_ROLE, params: '' },
  //   ],
  //   params:'',
  // },
] as const;
export default Menus;
