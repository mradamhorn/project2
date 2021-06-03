import React from 'react';
import GardenersModal from './ModalGardeners';


function AccordionGardeners(props) {
    var gardeners = props.gardeners;
    return (
        <div>
            <div className="accordion">
                    {gardeners.data && gardeners.data.map(gardener => {
                        return (
                            <div className="accordion-item" key={gardener.id + gardener.name}>
                                <h2 className="accordion-header" id={"heading" + gardener.id + gardener.name}>
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + gardener.id + gardener.name} aria-expanded="true" aria-controls={"collapse" + gardener.id + gardener.name}>
                                        {gardener.name}
                                     
                                    </button>
                                </h2>
                                <div id={"collapse" + gardener.id + gardener.name} className="accordion-collapse collapse" aria-labelledby={"heading" + gardener.id + gardener.name} data-bs-parent={"#heading" + gardener.id + gardener.name}>
                                    <div className="accordion-body deco">
                                        { gardener.Owned_Plants.length >= 1? <GardenersModal OwnedPlants={gardener.Owned_Plants} name= {gardener.name}/> : ""}

                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
        </div>
    )
}

export default AccordionGardeners
