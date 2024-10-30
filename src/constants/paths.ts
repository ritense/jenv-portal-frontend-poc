import { Paths } from "@nl-portal/nl-portal-user-interface";

export const paths: Paths = {
  noMatch: "/pagina-niet-gevonden",
  overview: "/",
  cases: "/zaken",
  case: (id = ":id") => `/zaken/zaak/${id}`,
  tasks: "/taken",
  task: (id = ":id") => `/taken/taak/${id}`,
  messages: "/berichten",
  message: (id = ":id") => `/berichten/bericht/${id}`,
  themeOverview: (type = ":type") => `/${type}`,
  themeDetails: (type = ":type", id = ":id") => `/${type}/${id}`,
  themeSub: (type = ":type", slug = ":slug") => `/${type}/${slug}`,
  account: "/account",
  editAccount: "/account/aanpassen",
  contacts: "/mijn-omgeving/contacten",
  addContact: "/mijn-omgeving/contacten/toevoegen",
  editContact: (id = ":id") => `/mijn-omgeving/contacten/contact/${id}`,
};
