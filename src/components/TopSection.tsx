import React from 'react';
import bottleImage from '../assets/bottleOnWhite.jpeg'
import { StyleSheet } from './Header';
import '../mysass.scss';


export default function TopSection(){

    return (
        <section style = {styles.container}>
        <img style = {styles.bottleImageContainer} src = {bottleImage}/>
        <div style = {styles.rightHandText}>
        <h1>
            Celebrate Your Strength
        </h1>
        <p style = {styles.body} >
        Pride Vodka is a refreshing new drink with a mission. 
        We donate 10% of our proceeds to LGBTQIA+ organizations. 
        But unlike other companies, we put the power in your hands making impact where it means most to you. 
        Let's drink to that! 
        </p>
        </div>


      </section>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row'
    },
    body: {
        flex: 1,
    },
    bottleImageContainer: {
        flex: 1,
        height: '100vh',
        objectFit: 'contain',
    },
    rightHandText: {
        flex: 1,
        textAlign: 'center',
    }
})
