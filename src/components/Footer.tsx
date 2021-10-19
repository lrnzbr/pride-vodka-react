import React from 'react';
import styled from 'styled-components';
import TwitterWhite from '../assets/twitter_white.png'
import FacebookWhite from '../assets/facebook_white.png'
import InstagramWhite from '../assets/instagram_white.png'
import LogoDark from '../assets/Logo_Dark.svg'
import { StyleSheet } from './Header';
import Palette from '../Palette';

export default function Footer(){
   
return (
    <section style = {styles.container}>
    <h2> Want to learn more about supporting local LGBTQIA+ charities? Contact or follow us!</h2>
    <div style = {styles.socialMediaContainer}>
    <img style = {styles.socialMediaIcon} src={InstagramWhite}/>
    <img style = {styles.socialMediaIcon} src={FacebookWhite}/>
    <img style = {styles.socialMediaIcon} src={TwitterWhite}/>
    </div> 
    <img src = {LogoDark}/>
    <p style = {styles.copyright}>Copyright © 2021 Jaw Ventures, LLC All rights reserved</p>
    </section >
);
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
        backgroundColor: 'black'
    },
    copyright: {
        color: Palette.text.dark
    },
socialMediaIcon : {
    height: '64px',
    width: '64px',
},
socialMediaContainer: {
    alignContent: 'center',
}

})