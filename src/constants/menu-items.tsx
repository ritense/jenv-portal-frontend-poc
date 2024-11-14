import {NavigationItem} from "@nl-portal/nl-portal-user-interface";
import {
    BuildingIcon, CalendarIcon,
    CheckCircleIcon, DocumentIcon,
    GridIcon, InboxIcon,
    MessageIcon, SearchIcon, ShareIcon,
    StaffIcon, UserLoggedInIcon
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
            icon: <CheckCircleIcon/>,
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
            titleTranslationKey: "agenda",
            path: "/mijn-omgeving/agenda",
            icon: <CalendarIcon/>,
        },
    ],
    [
        {
            titleTranslationKey: "besluiten",
            path: "/mijn-omgeving/besluiten",
            icon: <DocumentIcon/>,
        },
    ],
    [
        {
            titleTranslationKey: "plannen",
            path: "/mijn-omgeving/plannen",
            icon: <ShareIcon/>,
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
            titleTranslationKey: "onderzoeken",
            path: "/mijn-omgeving/onderzoeken",
            icon: <SearchIcon/>,
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
            titleTranslationKey: "account",
            path: paths.account,
            icon: <UserLoggedInIcon/>,
        },
    ],
];
