import React, { useEffect } from 'react'
import Menu from "../../assets/images/Dashboard/Menu.svg"
import Home from "../../assets/images/Dashboard/Icons/Home.svg"
import Home1 from "../../assets/images/Dashboard/Icons1/Home.svg"
import Battery from '../../assets/images/Dashboard/Icons/Battery.svg'
import Battery1 from '../../assets/images/Dashboard/Icons1/Battery.svg'
import Efficiency from '../../assets/images/Dashboard/Icons/Efficiency.svg'
import Efficiency1 from '../../assets/images/Dashboard/Icons1/Efficiency.svg'
import Future from '../../assets/images/Dashboard/Icons/Future.svg'
import Future1 from '../../assets/images/Dashboard/Icons1/Future.svg'
import Grid from '../../assets/images/Dashboard/Icons/Grid.svg'
import Grid1 from '../../assets/images/Dashboard/Icons1/Grid.svg'
import Log from '../../assets/images/Dashboard/Icons/Log.svg'
import Log1 from '../../assets/images/Dashboard/Icons1/Log.svg'
import Tilt from '../../assets/images/Dashboard/Icons/Tilt.svg'
import Tilt1 from '../../assets/images/Dashboard/Icons1/Tilt.svg'
import Past from '../../assets/images/Dashboard/Icons/Past.svg'
import Past1 from '../../assets/images/Dashboard/Icons1/Past.svg'
import Cloud from '../../assets/images/Dashboard/Icons/Cloud.svg'
import Cloud1 from '../../assets/images/Dashboard/Icons1/Cloud.svg'
import Avatar from "../../assets/images/Dashboard/Avatar.svg"
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function LeftNav({ comp, user }) {

    useEffect(() => {
        console.log(user)
    }, [])

    return (
        <div className="leftNav green-p-bg">
            <img src={Menu} alt="menu" className="leftNav__menu"/>
            <Link to="/dashboard">
                <img src={comp === "general" ? Home1 : Home} alt="menu" className={comp === "general" ? "leftNav__item selected1" : "leftNav__item"} style={{ marginTop: "10px" }}/>
            </Link>
            <Link to="/dashboard/battery">
                <img src={comp === "battery" ? Battery1 : Battery} alt="menu" className={comp === "battery" ? "leftNav__item selected1" : "leftNav__item"}/>
            </Link>
            <Link to="/dashboard/future">
                <img src={comp === "future" ? Future1 : Future} alt="menu" className={comp === "future" ? "leftNav__item selected1" : "leftNav__item"}/>
            </Link>
            <Link to="/dashboard/past">
                <img src={comp === "past" ? Past1 : Past} alt="menu" className={comp === "past" ? "leftNav__item selected1" : "leftNav__item"}/>
            </Link>
            <Link to="/dashboard/tilt">
                <img src={comp === "tilt" ? Tilt1 : Tilt} alt="menu" className={comp === "tilt" ? "leftNav__item selected1" : "leftNav__item"}/>
            </Link>
            <Link to="/dashboard/grid">
                <img src={comp === "grid" ? Grid1 : Grid} alt="menu" className={comp === "grid" ? "leftNav__item selected1" : "leftNav__item"}/>
            </Link>
            <Link to="/dashboard/compare">
                <img src={comp === "compare" ? Efficiency1 : Efficiency} alt="menu" className={comp === "compare" ? "leftNav__item selected1" : "leftNav__item"}/>
            </Link>
            {/* <Link to="/dashboard/temp">
                <img src={comp === "temp" ? Temp1 : Temp} alt="menu" className={comp === "temp" ? "leftNav__item selected1" : "leftNav__item"}/>
            </Link> */}
            <Link to="/dashboard/weather">
                <img src={comp === "wea" ? Cloud1 : Cloud} alt="menu" className={comp === "wea" ? "leftNav__item selected1" : "leftNav__item"}/>
            </Link>
            <Link to="/dashboard/diagnose">
                <img src={comp === "diagnose" ? Log1 : Log} alt="menu" className={comp === "diagnose" ? "leftNav__item selected1" : "leftNav__item"}/>
            </Link>
            <img src={user.photoURL} alt="avatar" className="leftNav__avatar"/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(LeftNav)
