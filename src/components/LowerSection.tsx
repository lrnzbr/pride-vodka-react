import React from 'react';
import styled from 'styled-components';
import BottleQR from '../assets/bottleShowingQRCode.png'
import '../mysass.scss';
import { StyleSheet } from './Header';

export default function LowerSection(){
 
  
      return (

          <div style = {styles.container}>
             <img src={BottleQR}/>
          
        <div style = {styles.rightContainer}>
          <h1>
          Be Engaged
          </h1>
         
          <p>
          By scanning the QR code on every bottle of Pride Vodka you can search for your favorite non-profit organizations
           and learn about other non-profits serving your local community.‍
           <b>Want to see how it works? </b> 
          </p>
          <button>Check out our Donation Portal</button>
  
  </div> 
        </div>
      );
  }

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row'
    },
    rightContainer:{
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
    }
  })
  