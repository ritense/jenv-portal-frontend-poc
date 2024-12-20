import {
  AccountPage,
  CasePage,
  CasesPage,
  EditAccountPage,
  MessagesPage,
  MessagePage,
  NoMatchPage,
  OverviewPage,
  TasksPage,
  TaskPage,
} from "@nl-portal/nl-portal-user-interface";
import { paths } from "./paths";
import { config } from "./config";
import { Navigate } from "react-router-dom";
import ThemeSampleOverviewPage from "../pages/ThemeSampleOverviewPage";
import ThemeSampleListPage from "../pages/ThemeSampleListPage";
import ThemeSampleDetailPage from "../pages/ThemeSampleDetailPage";
import ContactsPage from "../pages/ContactsPage";
import ContactEditPage from "../pages/ContactEditPage";
import ProfessionalsPage from "../pages/ProfessionalsPage";
import PlaceholderPage from "../pages/PlaceholderPage";
import PlannenPage from "../pages/PlannenPage";
import PlanEditPage from "../pages/PlanEditPage";

export const routes = [
  {
    path: paths.overview,
    element: <OverviewPage showIntro fetchTasksLength={0} />,
  },
  {
    path: paths.cases,
    children: [
      {
        index: true,
        element: <CasesPage />,
      },
      {
        path: paths.case(),
        element: <CasePage showContactTimeline />,
      },
    ],
  },
  {
    path: paths.tasks,
    children: [
      {
        index: true,
        element: <TasksPage />,
      },
      {
        path: paths.task(),
        element: <TaskPage />,
      },
    ],
  },
  {
    path: paths.messages,
    children: [
      {
        index: true,
        element: <MessagesPage />,
      },
      {
        path: paths.message(),
        element: <MessagePage />,
      },
    ],
  },
  {
    path: paths.themeOverview("sample"),
    children: [
      {
        index: true,
        element: <ThemeSampleOverviewPage />,
      },
      {
        path: paths.themeSub("sample", "contracten"),
        element: <ThemeSampleListPage />,
      },
      {
        path: paths.themeDetails("sample"),
        element: <ThemeSampleDetailPage />,
      },
    ],
  },
  {
    path: paths.account,
    children: [
      {
        index: true,
        element: (
          <AccountPage
            showInhabitantAmount={config.SHOW_INHABITANT_AMOUNT}
            addressResearchUrl={config.ADDRESS_RESEARCH_URL}
          />
        ),
      },
      {
        path: paths.editAccount,
        element: <EditAccountPage />,
      },
    ],
  },
  {
    path: paths.contacts,
    children: [
      {
        index: true,
        element: (
            <ContactsPage />
        ),
      },
      {
        path: paths.addContact,
        element: <ContactEditPage />,
      },
      {
        path: paths.editContact(),
        element: <ContactEditPage />,
      },
    ],
  },
  {
    path: paths.professionals,
    children: [
      {
        index: true,
        element: (
            <ProfessionalsPage />
        ),
      },
    ],
  },
  {
    path: paths.agenda,
    children: [
      {
        index: true,
        element: (
            <PlaceholderPage title={"Agenda"} />
        ),
      },
    ],
  },
  {
    path: paths.besluiten,
    children: [
      {
        index: true,
        element: (
            <PlaceholderPage title={"Besluiten"} />
        ),
      },
    ],
  },
  {
    path: paths.onderzoeken,
    children: [
      {
        index: true,
        element: (
            <PlaceholderPage title={"Onderzoeken"} />
        ),
      },
    ],
  },
  {
    path: paths.plannen,
    children: [
      {
        index: true,
        element: (
            <PlannenPage />
        ),
      },
      {
        path: paths.startNewPlan,
        element: <PlanEditPage />,
      },
    ],
  },
  {
    path: "/keycloak/callback",
    element: <Navigate to={sessionStorage.getItem("entryUrl") || "/"} />,
  },
  {
    path: paths.noMatch,
    element: <NoMatchPage contactLink={{ target: "_blank" }} />,
  },
  {
    path: "*",
    element: <Navigate to={paths.noMatch} />,
  },
];
