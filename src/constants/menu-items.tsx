import { NavigationItem } from "@nl-portal/nl-portal-user-interface";
import {
  GridIcon,
  InboxIcon,
  MessageIcon,
  StaffIcon,
  UserLoggedInIcon
} from "@gemeente-denhaag/icons";
import { paths } from "./paths";

export const menuItems: NavigationItem[][] = [
  [
    {
      titleTranslationKey: "overview",
      path: paths.overview,
      icon: <GridIcon />,
    },
  ],[
    {
      titleTranslationKey: "messages",
      path: paths.messages,
      icon: <MessageIcon />
    }
  ],
  [
    {
      titleTranslationKey: "cases",
      path: paths.cases,
      icon: <InboxIcon />,
    },
  ],
  [
    {
      titleTranslationKey: "contacts",
      path: paths.contacts,
      icon: <StaffIcon />,
    },
  ],
  [
    {
      titleTranslationKey: "account",
      path: paths.account,
      icon: <UserLoggedInIcon />,
    },
  ],
];
