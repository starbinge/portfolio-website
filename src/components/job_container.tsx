interface JobContainerProps {
    logoJob: string
    jobName: string
    onButtonClick: () => void;
}

function JobContainer({ logoJob, jobName, onButtonClick }: JobContainerProps) {
    return (
        <div className="job-container">
            <img src={logoJob} alt={`${jobName} logo`} className="job-logo" />
            <p className="job-name">{jobName}</p>
            <button className="primary-button" onClick={onButtonClick}>
                See Details
            </button>
        </div>
    )
}

export default JobContainer
