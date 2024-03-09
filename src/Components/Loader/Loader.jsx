import React from 'react'
import { ThreeCircles } from 'react-loader-spinner'

export default function Loader() {
    return (
        <ThreeCircles
            height="100"
            width="100"
            color="#E74040"
            wrapperStyle={{ marginTop: "350px" }}
            wrapperClass="justify-content-center"
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
        />
    )
}
