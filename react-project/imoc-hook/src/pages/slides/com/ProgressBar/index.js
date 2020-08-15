import React  from "react";
import useProgress from "../../hooks/useProgress"
export  default function ProgressBar({ animate, time }) {
    let progress = useProgress(animate, time);

    return (
        <div className="ProgressBar">
            <div
                style={{ width: `${progress * 100}%` }}
            />
        </div>
    );
}