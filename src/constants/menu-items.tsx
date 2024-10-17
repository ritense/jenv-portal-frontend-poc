import { NavigationItem } from "@nl-portal/nl-portal-user-interface";
import {ArchiveIcon, GridIcon, MessageIcon, UserIcon} from "@gemeente-denhaag/icons";
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
      icon: <ArchiveIcon />,
    },
  ],
  [
    {
      titleTranslationKey: "account",
      path: paths.account,
      icon: <UserIcon />,
    },
  ],
];
