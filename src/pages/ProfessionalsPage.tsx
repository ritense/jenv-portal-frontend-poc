import {Forum, SettingsAdjust} from "@carbon/icons-react";
import {Link} from "react-router-dom";
import {professionalsData} from "../mocks/professionals";
import {Search, Select, SelectItem} from "@carbon/react";
import {useState} from "react";

const ProfessionalsPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div className={"list-page"}>
            <header>
                <h1>Professionals</h1>
                <p>Hieronder volgt een overzicht van de professionals binnen verschillende instanties.</p>
            </header>
            <section>
                <div className={"search-cta-filter-trigger-holder float-right"}>
                    <Link to="javascript: void(0)"
                          onClick={() => setIsVisible(!isVisible)}
                          className={!isVisible ? "cta-default-toggle-button" : "cta-default-toggle-button active"}>
                        <SettingsAdjust/>&nbsp;&nbsp;Filters
                    </Link>
                </div>
                <div className={"search-cta-filter-holder float-left"}>
                    <Search id="search" labelText="Zoek naar een professional"
                            placeholder="Zoek naar een professional"/>
                </div>
                <div className={"clearfix"}></div>
            </section>
            {isVisible && (
                <div id="searchFilter"
                     className={"filter-holder"}>
                    <div>
                        <Select key={"instantie"}
                                id="instantie"
                                labelText="Instantie"
                                defaultValue="placeholder-item">
                            <SelectItem
                                disabled
                                hidden
                                value="placeholder-item"
                                text=""
                            />
                            <SelectItem value="Veilig Thuis/RVT" text="Veilig Thuis/RVT"/>
                            <SelectItem value="RdvK" text="RdvK"/>
                        </Select>
                    </div>
                    <div>
                        <Select key={"deskundigheid"}
                                id="deskundigheid"
                                labelText="Deskundigheid"
                                defaultValue="placeholder-item">
                            <SelectItem
                                disabled
                                hidden
                                value="placeholder-item"
                                text=""
                            />
                            <SelectItem value="Deskundigheid" text="Deskundigheid"/>
                        </Select>
                    </div>
                    <div>
                        <Select key={"leefgebied"}
                                id="leefgebied"
                                labelText="Leefgebied"
                                defaultValue="placeholder-item">
                            <SelectItem
                                disabled
                                hidden
                                value="placeholder-item"
                                text=""
                            />
                            <SelectItem value="Leefgebied" text="Leefgebied"/>
                        </Select>
                    </div>
                    <div className={"clearfix"}></div>
                </div>
            )}
            <table className={"list-table"}>
                <thead>
                <tr key={"head"}>
                    <th>Naam</th>
                    <th>Instantie</th>
                    <th>Telefoonnr.</th>
                    <th>E-mailadres</th>
                    <th>&nbsp;</th>
                </tr>
                </thead>
                <tbody>
                {professionalsData.map((row) => (
                    <tr key={row.id}>
                        <td>{row.naam || "-"}</td>
                        <td>{row.instantie || "-"}</td>
                        <td>{row.telefoonnr || "-"}</td>
                        <td>{row.email || "-"}</td>
                        <td>
                            <Link to="javascript:void(0)">
                                <Forum/> Stuur een bericht
                            </Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProfessionalsPage;
