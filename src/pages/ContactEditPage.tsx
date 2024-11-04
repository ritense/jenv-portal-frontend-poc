import {ArrowLeft} from "@carbon/icons-react";
import {Link, useParams} from "react-router-dom";
import {Select, SelectItem, TextInput} from "@carbon/react";
import {contactsData} from "../mocks/contacts";
import {paths} from "../constants/paths";

const ContactEditPage = () => {
    const id = useParams().id;
    let selectedContact = contactsData.find((e) => e.id === id);
    let pageTitle = id ? 'Aanpassen' : 'Nieuwe contact toevoegen';
    return (
        <div className={"list-page"}>
            <header>
                <h1>{pageTitle}</h1>
                <Link to={paths.contacts}>
                    <ArrowLeft/>&nbsp;&nbsp;Terug naar contacten
                </Link>
                <br/><br/>
                {!selectedContact && (
                    <div>
                        <p>Voeg een nieuwe contact toe binnen je directe netwerk.</p>
                        <p>Vul alle velden in. Als een veld niet verplicht is, staat dit erbij.</p>
                    </div>
                )}
                <br/>
                <form>
                    <div>
                        <TextInput light={true}
                                   id="naam"
                                   value={selectedContact?.naam ? selectedContact.naam : ""}
                                   labelText="Naam"/>
                    </div>
                    <br/>
                    <div>
                        <Select key={"famRelatie"}
                                id="famRelatie"
                                labelText="Type familierelatie (niet verplicht)"
                                value={selectedContact?.famRelatie ? selectedContact?.famRelatie: undefined}
                                defaultValue="placeholder-item">
                            <SelectItem
                                disabled
                                hidden
                                value="placeholder-item"
                                text="Selecteer de directe relatie met de contactpersoon"
                            />
                            <SelectItem value="Dochter" text="Dochter"/>
                            <SelectItem value="Oma moederskant" text="Oma moederskant"/>
                            <SelectItem value="Oma vaderskant" text="Oma vaderskant"/>
                            <SelectItem value="Opa moederskant" text="Opa moederskant"/>
                            <SelectItem value="Opa vaderskant" text="Opa vaderskant"/>
                            <SelectItem value="Pleegkind" text="Pleegkind"/>
                            <SelectItem value="Zoon" text="Zoon"/>
                        </Select>
                    </div>
                    <br/>
                    <div>
                        <Select key={"relatie"}
                                id="relatie"
                                labelText="Soort relatie (niet verplicht)"
                                value={selectedContact?.relatie ? selectedContact?.relatie : undefined}
                                defaultValue="placeholder-item">
                            <SelectItem
                                disabled
                                hidden
                                value="placeholder-item"
                                text="Selecteer de sociale relatie met de contactpersoon"
                            />
                            <SelectItem value="Buurman" text="Buurman"/>
                            <SelectItem value="Buurvrouw" text="Buurvrouw"/>
                            <SelectItem value="Kennis" text="Kennis"/>
                            <SelectItem value="Voetbalcoach" text="Voetbalcoach"/>
                        </Select>
                    </div>
                    <br/>
                    <div>
                        <TextInput light={true}
                                   id="tel"
                                   value={selectedContact?.email ? selectedContact.email : ""}
                                   labelText="E-mailadres"/>
                    </div>
                    <br/>
                    <div>
                        <TextInput light={true}
                                   id="telefoonnr"
                                   value={selectedContact?.telefoonnr ? selectedContact.telefoonnr : ""}
                                   labelText="Telefoonnr."/>
                    </div>
                </form>
                <div className={"cta-group"}>
                    <Link to={paths.contacts}
                          className={"cta-default-button"}>{pageTitle}</Link>
                    <div className={"cta-secondary"}>
                        <Link to={paths.contacts}>Opslaan en later verder</Link><br/>
                        <Link to={paths.contacts}>Stopen met formulier</Link>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default ContactEditPage;
