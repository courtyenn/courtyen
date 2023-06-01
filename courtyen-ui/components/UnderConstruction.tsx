import constructionCss from './UnderConstruction.css?inline'

export const UnderConstruction = () => {

    return (
        <>
            <style>{constructionCss}</style>
            <div className="cityscape">
                <div className="construction-container">
                    <div className="construction">
                        <div id="light1" className="flashing-light"></div>
                        <div id="light2" className="flashing-light"></div>
                        <div id="signpost">Under Construction</div>
                    </div>
                    <div className="construction bottompost"></div>
                    <div id="leg-right" className="legs"></div>
                    <div id="leg-left" className="legs"></div>
                </div>
            </div>
        </>
    );
}