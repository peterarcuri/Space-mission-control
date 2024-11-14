import styles from "./MissionAction.module.css";

const MissionAction = ({missionId, onUpdateMissionStatus}) => {

    return (
        <>
            <button className={styles.button} onClick={() => onUpdateMissionStatus(missionId, "Active")}>Launch</button>
            <button className={styles.button} onClick={() => onUpdateMissionStatus(missionId, "Completed")}>Complete</button>
        
        </>
    );
}


export default MissionAction;