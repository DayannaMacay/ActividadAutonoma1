import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [expressions, setExpressions] = useState([]);
    const [result, setResult] = useState('');

    const handleButtonPress = (value) => {
        if (value === '=') {
            try {
                const calculatedResult = eval(input).toString();
                setExpressions((prevExpressions) => [...prevExpressions, input]);
                setInput(calculatedResult);
                setResult(calculatedResult);
            } catch (error) {
                setInput('');
                setResult('Error');
            }
        } else if (value === 'C') {
            setExpressions([]);
            setInput('');
            setResult('');
        } else {
            setInput((prevInput) => prevInput + value);
        }
    };

    const renderButton = (value) => (
        <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress(value)}
        >
            <Text style={styles.buttonText}>{value}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.displayContainer}>
                {expressions.map((exp, index) => (
                    <Text key={index} style={styles.inputText}>{exp}</Text>
                ))}
                {input !== '' && result === '' && (
                    <Text style={styles.inputText}>{input}</Text>
                )}
                {result !== '' && (
                    <Text style={styles.resultText}>{result}</Text>
                )}
            </View>
            <View style={styles.buttonContainer}>
                {renderButton('C')}
                {renderButton('(')}
                {renderButton(')')}
                {renderButton('/')}
                {renderButton('7')}
                {renderButton('8')}
                {renderButton('9')}
                {renderButton('*')}
                {renderButton('4')}
                {renderButton('5')}
                {renderButton('6')}
                {renderButton('-')}
                {renderButton('1')}
                {renderButton('2')}
                {renderButton('3')}
                {renderButton('+')}
                {renderButton('.')}
                {renderButton('0')}
                {renderButton('CE')}
                {renderButton('=')}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    displayContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: 'black',
        padding: 10,
    },
    buttonContainer: {
        flex: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    inputText: {
        fontSize: 30,
        color: 'white',
    },
    resultText: {
        fontSize: 60,
        color: 'white',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '25%',
        height: '20%',
        backgroundColor: 'rgba(240, 240, 240, 0.9)',
        borderColor: '#ccc',
        borderWidth: 1,
    },
    buttonText: {
        fontSize: 30,
        color: 'black',
    },
});

export default Calculator;
