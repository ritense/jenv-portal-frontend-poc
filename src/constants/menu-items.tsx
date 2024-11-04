import {NavigationItem} from "@nl-portal/nl-portal-user-interface";
import {
    BuildingIcon,
    CheckCircleIcon,
    GridIcon,
    InboxIcon,
    MessageIcon,
    StaffIcon,
    UserLoggedInIcon
} from "@gemeente-denhaag/icons";
import {paths} from "./paths";

export const menuItems: NavigationItem[][] = [
    [
        {
            titleTranslationKey: "overview",
            path: paths.overview,
            icon: <GridIcon/>,
        },
    ],
    [
        {
            titleTranslationKey: "tasks",
            path: paths.tasks,
            icon: <CheckCircleIcon />,
        },
    ],
    [
        {
            titleTranslationKey: "messages",
            path: paths.messages,
            icon: <MessageIcon/>
        }
    ],
    [
        {
            titleTranslationKey: "cases",
            path: paths.cases,
            icon: <InboxIcon/>,
        },
    ],
    [
        {
            titleTranslationKey: "contacts",
            path: "/mijn-omgeving/contacten",
            icon: <StaffIcon/>,
        },
    ],
    [
        {
            titleTranslationKey: "professionals",
            path: "/mijn-omgeving/professionals",
            icon: <BuildingIcon/>,
        },
    ],
    [
        {
            titleTranslationKey: "account",
            path: paths.account,
            icon: <UserLoggedInIcon/>,
        },
    ],
];
