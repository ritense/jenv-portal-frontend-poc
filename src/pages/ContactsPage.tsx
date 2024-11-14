import {AddAlt, Edit} from "@carbon/icons-react";
import {Link} from "react-router-dom";
import {contactsData} from "../mocks/contacts";
import {paths} from "../constants/paths";

const ContactsPage = () => {
    return (
        <div className={"list-page"}>
            <header>
                <h1>Contacten</h1>
                <div className={"search-cta-filter-trigger-holder float-right"}>
                    <Link to={paths.addContact}
                          className={"cta-default-toggle-button active"}>
                        <AddAlt/>&nbsp;&nbsp;Nieuw contact toevoegen
                    </Link>
                </div>
                <p>Hieronder volgt een overzicht van je contacten binnen je directe omgeving.</p>
                <div className={"clearfix"}></div>
            </header>
            <table className={"list-table"}>
                <thead>
                <tr key={"head"}>
                    <th>Naam</th>
                    <th>Type fam. relatie</th>
                    <th>Type soort relatie</th>
                    <th>E-mailadres</th>
                    <th>&nbsp;</th>
                </tr>
                </thead>
                <tbody>
                {contactsData.map((row) => (
                    <tr key={row.id}>
                        <td>{row.naam || "-"}</td>
                        <td>{row.famRelatie || "-"}</td>
                        <td>{row.relatie || "-"}</td>
                        <td>{row.email || "-"}</td>
                        <td>
                            <Link to={paths.editContact(row.id)}>
                                <Edit/> Aanpassen
                            </Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ContactsPage;
