import React from 'react';
import bottleNeon from '../assets/bottleOnDarkNeon.jpeg'
import '../mysass.scss';
import { StyleSheet } from './Header';



export default function MidSection(){   
    
        return (
            <div style = {styles.container}>
           
           <div style = {styles.rightContainer}>
            <h1>
            Authentically Delicious
            </h1>
           
            <p>
            When it comes to transparency, we're as clear as vodka. 
            Our donation portal provides users with statistics to see exactly where every cent of our proceeds are going.
            We believe donating should be delicious! 
            We're confident that in addition to being a part of positive change, you'll love the great taste of Pride Vodka.
            <b>Let's celebrate with every drink!</b>
    
            </p>
            <button>Join Our Mailing List</button>
            </div>
            <img src={bottleNeon}/>
    
    
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