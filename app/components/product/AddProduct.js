import React, { Component } from 'react';
import { styles } from './styles';
import { View, TextInput, TouchableHighlight, Text } from 'react-native'


export default class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                name: '',
                price: ''
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleAddProduct = this.handleAddProduct.bind(this);
    }
    handleChange(e, fieldName) {
        let currentState = this.state;
        currentState.product[fieldName] = e.nativeEvent.text;
        this.setState(currentState);
    }
    handleAddProduct() {
        console.log(this.state.product);
    }
    render() {
        return (
            <View>
                <TextInput style={styles.input}
                    placeholder='Product Name'
                    onChange={(e) => {
                        this.handleChange(e, 'name')
                    }} />
                <TextInput style={styles.input}
                    placeholder='Product Price'
                    onChange={(e) => {
                        this.handleChange(e, 'price')
                    }} />
                <TouchableHighlight
                    style={styles.item}
                    onPress={this.handleAddProduct}>
                    <Text style={styles.text}>Add Product</Text>
                </TouchableHighlight>
            </View>
        );
    }
}