import {useState} from "react";

import styles from "./MissionControl.module.css";
import MissionAction from "./MissionAction.jsx"
import MissionCard from "./MissionCard.jsx";
import MissionFilter from "./MissionFilter.jsx";

const MissionControl = ({initialMissions}) => {
    const [missionList, setMissionList] = useState(initialMissions);
    const [filter, setFilter] = useState("All")

    //Function to update mission status
    const updateMissionStatus = (id, newStatus) => {
        const updatedMissions = missionList.map(mission => 
            mission.id === id ? {...mission, status: newStatus} : mission
        );
        setMissionList(updatedMissions);
        
    };

    // Function to filter missions by status
    const filterMissions = (status) => {setFilteredStatus(status)};

    const filteredMissions = missionList.filter(mission => filter === "All" || mission.status === filter);

    return (
        <div>
            <h1>Space Mission Control</h1>

            <div className={styles.filterContainer}>
                <MissionFilter setFilter={setFilter} />
            </div>

            {
                filteredMissions.map(mission => {
                    const {id, name, status, crew} = mission;

                    return (
                        <div
                            key={id}
                            className={styles.missionContainer}
                        >
                            <div>
                                <MissionCard name={name} status={status} crew={crew} />
                            </div>

                            <div>
                                <MissionAction missionId={id} onUpdateMissionStatus={updateMissionStatus} />            
                            </div>
                        </div>
                    );
                })
            }

        </div>
    );
}

export default MissionControl;



