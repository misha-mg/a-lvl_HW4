import "./buy-portal.css";

export function BuyPortalElement(props) {


    return(
        <div id="portalBuy" className="portal-buy__wrapper">
            <div className="portal-buy">
                <p>Are you sure to delete</p>
                <div className="portal-buy__buttons">
                    <button onClick={() => props.delete(true)}>Yes</button>
                    <button onClick={() => props.delete(false)}>No</button>
                </div>
            </div>
        </div>
    )
}