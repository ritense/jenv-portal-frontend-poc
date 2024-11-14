interface PlaceholderPageProps {
    title?: string
}

const PlaceholderPage = ({title}: PlaceholderPageProps) => {
    return (
        <div className={"list-page"}>
            <header>
                <h1>{title || "Untitled"}</h1>
                <p>Hieronder volgt een overzicht van ...</p>
                <div className={"clearfix"}></div>
            </header>
        </div>
    );
};

export default PlaceholderPage;
