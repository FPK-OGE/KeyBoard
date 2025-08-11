import backMain from '../../img/Group 1597880434.svg'
import styles from '../../css/style.module.css'
import React, { useState } from "react";

const MainBoard = ({ active }) => {


    return<>
    <div className={active ? styles.MainBoardactive : styles.MainBoard}>
    <img src={backMain} alt="" />
    </div>
    </>
}

export default MainBoard;