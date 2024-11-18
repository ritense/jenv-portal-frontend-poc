import {AddAlt} from "@carbon/icons-react";
import {Link} from "react-router-dom";
import {paths} from "../constants/paths";

const PlannenPage = () => {
    return (
        <div className={"list-page"}>
            <header>
                <h1>Plannen</h1>
                <div className={"search-cta-filter-trigger-holder float-right"}>
                    <Link to={paths.startNewPlan}
                          className={"cta-default-toggle-button active"}>
                        <AddAlt/>&nbsp;&nbsp;Start nieuwe plan
                    </Link>
                </div>
                <p>Hieronder vindt u een overzicht van alle plannen in samenwerking met organisaties.</p>
                <div className={"clearfix"}></div>
            </header>
        </div>
    );
};

export default PlannenPage;
