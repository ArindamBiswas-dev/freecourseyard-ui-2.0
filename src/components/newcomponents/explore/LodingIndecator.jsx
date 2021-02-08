import React from 'react';
import { usePromiseTracker } from "react-promise-tracker";
import { ClimbingBoxLoader } from "react-spinners";

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
                    alignItems: "center"
                }}
            >
                <ClimbingBoxLoader color="#0E27A8" loading={true} size={15} margin={2} />
            </div>
        )
    );
};

export default LodingIndecator
