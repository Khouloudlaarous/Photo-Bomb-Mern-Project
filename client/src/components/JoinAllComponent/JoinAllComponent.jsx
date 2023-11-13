import React from 'react';
import Navbar from '../Navbar/Navbar';
import Dashboard from '../Dashboard';
import {Fragment, useEffect, useState} from "react";

const JoinAllComponent = () => {
    return (
        <Fragment>
            <Navbar/>
            <Dashboard/>
        </Fragment>
    );
}

export default JoinAllComponent;