import {Column, Grid} from "@carbon/react";

const CostomFooter = () => {
    return (
        <div className="custom-footer">
            <footer>
                <Grid>
                    <Column sm={4}>
                        <img src="/src/assets/netherlands.svg" className={"footer-logo"} alt={"NL footer logo"} />
                        <h4 className={"footer-logo-title"}>Voorbeeld</h4>
                    </Column>
                    <Column sm={4}>
                        <strong>Contact</strong>
                        <p>Bel 453 453 (maandag tot en met vrijdag
                            van 9.00 tot 17.00) of stuur een email
                            naar vragen@voorbeeld.nl</p>
                    </Column>
                    <Column sm={4}>
                        <a>Over gemeente</a>
                        <a>Nieuwsbrief</a>
                        <a>Social media</a>
                        <a>Werken bij gemeente</a>
                    </Column>
                    <Column sm={4}>
                        <a>Bescherming persoonsgegevens</a>
                        <a>Gebruikersvoorwaarden</a>
                        <a>Proclaimer</a>
                        <a>Toegankelijkheidsverklaring</a>
                    </Column>
                </Grid>
            </footer>
        </div>
    );
};

export default CostomFooter;
