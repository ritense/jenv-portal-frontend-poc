import {
    ArrowLeft,
    ArrowRight,
    CheckmarkOutline, CircleOutline,
    CloseLarge,
    Template,
    View
} from "@carbon/icons-react";
import {Link, useParams} from "react-router-dom";
import {Column, DatePickerInput, FlexGrid, Row, TextArea, TextInput} from "@carbon/react";
import {contactsData} from "../mocks/contacts";
import {paths} from "../constants/paths";
import {useState} from "react";

const PlanEditPage = () => {
    const id = useParams().id;
    let selectedContact = contactsData.find((e) => e.id === id);
    let pageTitle = id ? 'Aanpassen' : 'Start nieuwe plan';
    const [isSelectSjabloonVisible, setIsSelectSjabloonVisible] = useState(false);
    const [isSelectContactpersonenVisible, setIsSelectContactpersonenVisible] = useState(false);
    return (
        <div className={"list-page"}>
            <header>
                <h1>{pageTitle}</h1>
                <Link to="javascript: void(0)"
                      className={"float-right"}
                      onClick={() => setIsSelectSjabloonVisible(!isSelectSjabloonVisible)}>
                    <Template/>&nbsp;&nbsp;Kies een sjabloon
                </Link>
                <Link to={paths.plannen}>
                    <ArrowLeft/>&nbsp;&nbsp;Terug naar plannen
                </Link>
                <div className={"clearfix"}></div>
                <br/><br/>
                {!selectedContact && (
                    <div>
                        <p>Om te starten met een nieuwe samenwerking moet er eerst een plan worden opgesteld voor de
                            komende periode.</p>
                        <p>Vul alle velden in. Als een veld niet verplicht is, staat dit erbij.</p>
                    </div>
                )}
                <br/>
                <form>
                    <div className={"form-start-plan"}>
                        <div className="cds--text-input__label-wrapper">
                            <label className="cds--label">Titel</label>
                        </div>
                        <p className={"label-description"}>Beschrijf in het kort de titel van je plan</p>
                        <TextInput light={true}
                                   labelText=""
                                   id="titel" />
                        <br/>
                        <div className="cds--text-input__label-wrapper">
                            <label className="cds--label">Aanleiding plan</label>
                        </div>
                        <p className={"label-description"}>Selecteer de betrokkenen binnen het plan</p>
                        <TextArea labelText=""
                                  rows={4} id="text-area" />
                        <br/>

                        <div className="cds--text-input__label-wrapper">
                            <label className="cds--label">Wie zijn er allemaal direct betrokken?</label>
                        </div>
                        <p className={"label-description"}>Selecteer de betrokkenen binnen het plan</p>
                        <Link to="javascript: void(0)"
                              onClick={() => setIsSelectContactpersonenVisible(!isSelectContactpersonenVisible)}>
                            Selecteer meerdere contactpersonen&nbsp;&nbsp;<ArrowRight/>
                        </Link>
                        <br/><br/>

                        <div className="cds--text-input__label-wrapper">
                            <label className="cds--label">Welke professionals zijn er betrokken?</label>
                        </div>
                        <p className={"label-description"}>Selecteer de betrokkenen binnen het plan</p>
                        <Link to="javascript: void(0)"
                              onClick={() => setIsSelectContactpersonenVisible(!isSelectContactpersonenVisible)}>
                            Selecteer meerdere contactpersonen&nbsp;&nbsp;<ArrowRight/>
                        </Link>
                        <br/><br/>

                        <div className="cds--text-input__label-wrapper">
                            <label className="cds--label">Verwachte einddatum</label>
                        </div>
                        <p className={"label-description"}>Geef een verwachte einddatum op van het plan</p>
                        <DatePickerInput placeholder="dd/mm/jjjj" id="date-picker"  labelText={""}/>
                        <br/>

                        <div className="cds--text-input__label-wrapper">
                            <label className="cds--label">Bestand toevoegen (niet verplicht)</label>
                        </div>
                        <p className={"label-description"}>Geef een verwachte einddatum op van het plan</p>
                        <ul>
                            <li>U kunt meerdere bestanden tegelijk toevoegen.</li>
                            <li>U mag maximaal 10 Mb aan bestanden toevoegen.</li>
                            <li>Toegestane bestandstypen: doc, docx, xslx, pdf, zip, jpg, png, bmp en gif.</li>
                        </ul>
                        <input type={"file"} />
                    </div>
                </form>
                <div className={"cta-group"}>
                    <Link to={paths.plannen}
                          className={"cta-default-button"}>{pageTitle}</Link>
                    <div className={"cta-secondary"}>
                        <Link to={paths.plannen}>Opslaan en later verder</Link><br/>
                        <Link to={paths.plannen}>Stopen met formulier</Link>
                    </div>
                </div>
            </header>

            {isSelectSjabloonVisible && (
                <div className={"modal-backdrop"}>
                    <div className={"modal-body"}>
                        <div className={"modal-header"}>
                            <Link to="javascript: void(0)"
                                  className={"float-right"}
                                  onClick={() => setIsSelectSjabloonVisible(!isSelectSjabloonVisible)}>
                                <CloseLarge size={30}/>
                            </Link>
                            <h3>Kies een sjabloon</h3>
                        </div>
                        <div className={"modal-content"}>
                            <br />
                            <FlexGrid fullWidth>
                                <Row>
                                    <Column>
                                        <div className={"item-to-select"}>
                                            <CircleOutline size={25} className={"float-right icon-muted"} />
                                            <h5>Veiligheidsplan</h5>
                                            <p>Dit sjabloon bevat:</p>
                                            <ul>
                                                <li>
                                                    Titel: Veiligheidsplan [naam gezin]
                                                </li><li>
                                                    Aanleiding: Veiligheid waarborgen
                                                </li><li>
                                                    2 doelen
                                                </li><li>
                                                    7 acties
                                                </li>
                                            </ul>
                                            <Link to="javascript: void(0)">
                                                <View/> Bekijk sjabloon
                                            </Link>
                                        </div>
                                    </Column>
                                    <Column>
                                        <div className={"item-to-select selected"}>
                                            <CheckmarkOutline size={25} className={"float-right icon-selected"}/>
                                            <h5>Werken aan mijn verslaving</h5>
                                            <p>Dit sjabloon bevat:</p>
                                            <ul>
                                                <li>
                                                    Titel: Werken aan mijn verslaving
                                                </li>
                                                <li>
                                                    Aanleiding: Van mijn verslaving afkomen
                                                </li>
                                                <li>
                                                    3 doelen
                                                </li>
                                                <li>
                                                    4 acties
                                                </li>
                                            </ul>
                                            <Link to="javascript: void(0)">
                                                <View/> Bekijk sjabloon
                                            </Link>
                                        </div>
                                    </Column>
                                    <Column>
                                        <div className={"item-to-select"}>
                                            <CircleOutline size={25} className={"float-right icon-muted"}/>
                                            <h5>Scheidingsplan</h5>
                                            <p>Dit sjabloon bevat:</p>
                                            <ul>
                                                <li>
                                                    Titel: Scheidingsplan
                                                </li>
                                                <li>
                                                    Aanleiding: Fijn uit elkaar
                                                </li>
                                                <li>
                                                    1 doel
                                                </li>
                                                <li>
                                                    12 acties
                                                </li>
                                            </ul>
                                            <Link to="javascript: void(0)">
                                                <View/> Bekijk sjabloon
                                            </Link>
                                        </div>
                                    </Column>
                                </Row>
                            </FlexGrid>
                            <div className={"clearfix"}></div>
                            <br/>
                            <p className={"text-center"}>
                                <Link to="javascript: void(0)"
                                      className={"cta-default-button"}
                                      onClick={() => setIsSelectSjabloonVisible(!isSelectSjabloonVisible)}>
                                    Gebruik dit sjabloon
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {isSelectContactpersonenVisible && (
                <div className={"modal-backdrop"}>
                    <div className={"modal-body"}>
                        <div className={"modal-header"}>
                            <Link to="javascript: void(0)"
                                  className={"float-right"}
                                  onClick={() => setIsSelectContactpersonenVisible(!setIsSelectContactpersonenVisible)}>
                                <CloseLarge size={30}/>
                            </Link>
                            <h3>Selecteer meerdere contactpersonen</h3>
                        </div>
                        <div className={"modal-content"}>
                            <table className={"list-table"}>
                                <thead>
                                <tr key={"head"}>
                                    <th>Selecteer</th>
                                    <th>Naam</th>
                                    <th>Type fam. relatie</th>
                                    <th>Type soort relatie</th>
                                    <th>E-mailadres</th>
                                </tr>
                                </thead>
                                <tbody>
                                {contactsData.map((row) => (
                                    <tr key={row.id}>
                                        <td><input type={"checkbox"}/></td>
                                        <td>{row.naam || "-"}</td>
                                        <td>{row.famRelatie || "-"}</td>
                                        <td>{row.relatie || "-"}</td>
                                        <td>{row.email || "-"}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            <br/>
                            <br/>
                            <Link to="javascript: void(0)"
                                  className={"cta-default-button"}
                                  onClick={() => setIsSelectContactpersonenVisible(!isSelectContactpersonenVisible)}>
                                Selecteer contactpersonen
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PlanEditPage;
