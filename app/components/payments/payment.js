import React from 'react';
import RazorpayCheckout from 'react-native-razorpay'
import {TouchableHighlight, Text, StyleSheet} from 'react-native'

export const Payment = () => {
    return <TouchableHighlight style={styles.button} onPress={() => {
        var options = {
          description: 'Credits towards consultation',
          image: 'https://i.imgur.com/3g7nmJC.png',
          currency: 'INR',
          key: 'rzp_test_G9tTuRXdQxhKu2',
          amount: '50000',
          name: 'foo',
          prefill: {
            email: 'void@razorpay.com',
            contact: '9191919191',
            name: 'Razorpay Software'
          },
          theme: {color: '#528FF0'}
        }
        RazorpayCheckout.open(options).then((data) => {
          // handle success
          alert(`Success: ${data.razorpay_payment_id}`);
        }).catch((error) => {
          // handle failure
          alert(`Error: ${error.code} | ${error.description}`);
        });
      }}>
        <Text style={styles.buttonText}>Pay</Text>
      </TouchableHighlight>
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2e99e4',
    padding: 15,
    margin: 10,
    marginBottom: 5
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center'
  }
});