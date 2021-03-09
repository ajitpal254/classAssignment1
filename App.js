import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

export default class App extends React.Component {



    Sum = () => {
        var N1 = parseInt(this.state.Num1);
        var N2 = parseInt(this.state.Num2);
        var output = N1+N2;
        this.Result.value = output;



    }
    Subtract = () =>{
        var N1 = parseInt(this.state.Num1);
        var N2 = parseInt(this.state.Num2);
        if(N1<N2){
            alert("N1 should be greater that N2")
        }
        else{
            var output = N1-N2;
            this.Result.value = output;

        }
    }
    Multiply = () =>{
        var N1 = parseInt(this.state.Num1);
        var N2 = parseInt(this.state.Num2);
        var output  = N1*N2;
        this.Result.value = output;

    }
    Division = ()=>{
        var N1 = parseInt(this.state.Num1);
        var N2 = parseInt(this.state.Num2);
        if(N2==0){
            alert("N2 cannot be 0");
        }
        else{
            var output = N1/N2;

            this.Result.value = output;
        }

    }
    clear1 = () =>{
        this.Num1.clear();
        this.Num2.clear();
        this.Result.clear();
    }

    render() {

        return (
            <View style={styles.container}>
                <TextInput style={{borderWidth: 1, margin: 10}} placeholder="Num1" ref = {Num1 => {this.Num1 = Num1}}
                           onChangeText={Num1 => this.setState({Num1})}/>
                <TextInput style={{borderWidth: 1, margin: 10}} placeholder="Num2" ref = {Num2 => {this.Num2 = Num2}}
                           onChangeText={Num2 => this.setState({Num2})}/>
                <TextInput style={{borderWidth: 1, margin: 10}} placeholder="Result"  ref = { Result =>{this.Result = Result}} onChangeText={Result => this.setState({Result})}/>
                <View style={styles.btns}>
                    <View style={styles.btn1}>
                        <Button title="+"  onPress={this.Sum}/>
                    </View>

                    <View style={styles.btn2}>
                        <Button title="-" onPress={this.Subtract}/>
                    </View>
                    <View style={styles.btn3}>
                        <Button title="*" onPress={this.Multiply}/>
                    </View>
                    <View style={styles.btn4}>
                        <Button title="/" onPress={this.Division}/>
                    </View>
                    <View style={styles.btn5}>
                        <Button title="clear" onPress={this.clear}/>
                    </View>
                    <StatusBar style="auto"/>
                </View>

                <StatusBar style="auto"/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
    btns:{
      flexDirection:'row',
        marginTop:20,
    },
    btn1:{
      marginLeft:10,
    },
    btn2:{
        marginLeft:10,
    },
    btn3:{
        marginLeft:10,
    },
    btn4:{
        marginLeft:10,
    },
    btn5:{
        marginLeft:10,
    },

});
