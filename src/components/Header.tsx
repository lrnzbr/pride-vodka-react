import React from 'react';
import styled from 'styled-components';
import LightLogo from '../assets/LightLogo.svg'
import { NavLink } from 'react-router-dom'
import Palette from '../Palette';
import '../mysass.scss';


type CSSProperties = {
    [key:string]: React.CSSProperties;
  };
  
  export class StyleSheet {
    static create<Styles extends CSSProperties>(styles: Styles): Styles {
      return styles;
    };
  };



export default function Header(){



    return (
        <section style = {styles.header}>
            <PrideLogo /> 
            <Links/>
      </section>
    );
}

function Links(){
    return (
        <span style = {styles.linkContainer}>
        <NavLink  style = {styles.link} to="/">Home</NavLink>
        <NavLink style = {styles.link} to="/about">About</NavLink>
        <NavLink style = {styles.link} to="/whereToBuy">Where To Buy</NavLink>
        </span>
    )
}

function PrideLogo() {
    return (
        <img style = {styles.prideLogo} src={LightLogo}/>
    )
}

const styles = StyleSheet.create({
    header: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'space-between',
    padding: 25
    },
    prideLogo: {
        
        width: '90px'
    },
    link: {
        textDecoration: 'None',
        fontFamily: 'Nunito-Regular',
        textTransform: 'uppercase',
        fontWeight: 700,
    },
    
    linkContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 300
    }
})