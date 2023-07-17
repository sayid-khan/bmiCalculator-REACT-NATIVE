import { View, Text,StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Constants from 'expo-constants'

const BmiCalculator = () => {
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [bmi, setBmi] = useState('')
    const [description, setDescription] = useState('')

    const calculateBmi =()=>{
        const bmi = weight / ((height/100) * (height/100))

        setBmi(bmi.toFixed(1))

        if (bmi < 18.5){
            setDescription("Underweight, eat more!!!")
        }
        else if (bmi >=18.5 && bmi < 24.9){
            setDescription("Normal, keep it up!!")
        }
        else if(bmi >=25 && bmi <= 29.9 ){
            setDescription("Overweight, loose some weight!!!")
        }else if(bmi >= 30 ){
            setDescription("Obese, hit the GYM!!!")
        }
    }

  return (
    <View style={styles.container}>
        <View style={styles.title}>
            <Text style={{fontSize:30,fontWeight:"800"}}>BMI Calculator</Text>
        </View>
     <TextInput
     placeholder="Enter weight in Kg's"
     value={weight}
     keyboardType="numeric"
     onChangeText={(text)=>setWeight(text)}
     style={styles.input}
     />
     <TextInput
     placeholder="Enter height in Cm."
     value={height}
     keyboardType="numeric"
     onChangeText={(text)=>setHeight(text)}
     style={styles.input}
     />
     <TouchableOpacity
     style={styles.button}
     onPress={calculateBmi}
     >
        <Text style={{fontSize:18,fontWeight:"500",color:"red"}}>Calculate</Text>
     </TouchableOpacity>
        <View style={styles.resultView}>
            <Text style={{fontSize:18, fontWeight:"400"}}>
                {bmi}
            </Text>
            <Text style={{fontSize:18, fontWeight:"400"}}>
                {description}
            </Text>
        </View>
    </View>
  )
}

export default BmiCalculator

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop:Constants.statusBarHeight,
      backgroundColor:"#e0ecde",
    },
    title:{
        backgroundColor:"#06B2AF",
        height:80,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:5,
        opacity:0.7,
        marginTop:10,
        marginHorizontal:4
    },
    input:{
        height:55,
        margin:15,
        borderWidth:1/2,
        padding:10,
        borderRadius:5,
        backgroundColor:"#cde0c9",
        fontSize:18
    },
    button:{
        justifyContent:"center",
        alignItems:"center",
        height:55,
        margin:15,
        borderWidth:1/2,
        borderRadius:5,
        backgroundColor:"#68b2a0"

    },
    resultView:{
        margin:15,
        alignItems:"center",
        justifyContent:"center"
    }
  });