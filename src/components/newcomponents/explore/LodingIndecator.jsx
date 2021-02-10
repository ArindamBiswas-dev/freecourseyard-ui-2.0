import React from 'react';
import { usePromiseTracker } from "react-promise-tracker";
import { ClimbingBoxLoader, ClockLoader, GridLoader, PropagateLoader, RotateLoader } from "react-spinners";

function LodingIndecator() {

    const { promiseInProgress } = usePromiseTracker();

    return (
        promiseInProgress && (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <GridLoader color="#0E27A8" loading={true} size={20} />
            </div>
        )
    );
};

export default LodingIndecator
