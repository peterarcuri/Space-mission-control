import styles from "./MissionFilter.module.css";

const MissionFilter = ({setFilter}) => {

    const statuses = ["All", "Planned", "Active", "Completed"];

    return (
        <>
            {
                statuses.map((status, index) => (
                    <button
                        key={index}
                        onClick={() => setFilter(status)}
                        className={styles.button}
                    >
                        {status}
                    </button>
                ))
            }        
        </>
    );
}

export default MissionFilter;