import React from 'react'
import BuildControls from '../Burger/BuildControls/BuildControls'
import classes from './Layout.module.css'


const  Layout = (props) => {
    return(
        <React.Fragment>
            <div>ToolBar SideBar BackDrop</div>
             <main className={classes.content}>
                {props.children}
            </main>
        </React.Fragment>
    );
}

export default Layout;