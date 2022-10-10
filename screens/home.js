import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize'
import * as React from 'react';
import {Header,AirbnbRating,Icon} from 'react-native-elements'
import axios from 'axios';

export default class Home extends React.Component {

    constructor(){
        super();
        this.state={
            movie_detail:{}
        }
    }

    get_movies=()=>{
        
        try{
            axios
<<<<<<< HEAD
            .get('https://2b0d-103-163-192-155.in.ngrok.io/get-movies')
=======
            .get('https://c097-103-163-192-175.in.ngrok.io/get-movies')
>>>>>>> 247ce3cd6cb3041efa6b8489c5c2ec01ad28f039
            .then((response)=>{
            var details=response.data.Data
            details['duration']=this.timeConvert(details.duration)
            this.setState({
                movie_detail:details
            })
        })
        }
        catch(e){
            console.log(e)
        }
    }
    liked_movies=()=>{
        axios
<<<<<<< HEAD
        .post('https://2b0d-103-163-192-155.in.ngrok.io/liked-movies')
=======
        .post('https://c097-103-163-192-175.in.ngrok.io/liked-movies')
>>>>>>> 247ce3cd6cb3041efa6b8489c5c2ec01ad28f039
        .then((response)=>{
            this.get_movies()
        })
        .catch((e)=>{console.log(e)})

    }
    disliked_movies=()=>{
        axios
<<<<<<< HEAD
        .post('https://2b0d-103-163-192-155.in.ngrok.io/disliked-movies')
=======
        .post('https://c097-103-163-192-175.in.ngrok.io/disliked-movies')
>>>>>>> 247ce3cd6cb3041efa6b8489c5c2ec01ad28f039
        .then((response)=>{
            this.get_movies()
        })
    }
    notwatched_movies=()=>{
        axios
        .post('https://c097-103-163-192-175.in.ngrok.io/did-not-watched')
        .then((response)=>{
            this.get_movies()
        })
    }
    timeConvert=(num)=>{
        var hours=Math.floor(num/60)
        var minutes=num%60
        return `${hours}hrs ${minutes}mins`
    }

    componentDidMount(){
        this.get_movies()
    }

    render() {
        return(
            <View style={styles.container}>
                <Header
                    centerComponent={{
                        text:'Movies',
                        style:{
                            fontSize:RFValue(30),
                        }
                    }}
                    backgroundColor={'pink'}
                    rightComponent={{
                        icon:'movie-open',
                        color:'white',
                        type:'material-community',
                        onPress:()=>{

                        }
                    }}
                />
                <View style={styles.imgContainer}>
<<<<<<< HEAD
                    {/* <Image style={styles.image} source={{uri:this.state.movie_detail.poster_link}}/> */}
=======
                    <Image source={{uri:this.state.movie_detail.poster_link}}/>
>>>>>>> 247ce3cd6cb3041efa6b8489c5c2ec01ad28f039
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        {this.state.movie_detail.title}
                    </Text>
                </View>
                <View style={styles.time}>
<<<<<<< HEAD
                    <Text style={styles.tx}>{this.state.movie_detail.release_date}</Text>
                    <Text style={styles.tx}>{this.state.movie_detail.duration}</Text>
=======
                    <Text style={styles.tt}>{this.state.movie_detail.release_date}</Text>
                    <Text style={styles.tt}>{this.state.movie_detail.duration}</Text>
>>>>>>> 247ce3cd6cb3041efa6b8489c5c2ec01ad28f039
                </View>
                <View style={styles.ratingContainer}>
                    <AirbnbRating
                    count={10}
                    defaultRating={this.state.movie_detail.rating}
                    isDisabled={true}
                    size={RFValue(25)}
                    />
                </View>
                <View style={styles.overviewContainer}>
                    <Text style={styles.overviewtext}>
                        {this.state.movie_detail.overview}
                    </Text>
<<<<<<< HEAD

                </View>
=======
>>>>>>> 247ce3cd6cb3041efa6b8489c5c2ec01ad28f039
                    <View style={styles.ldbtncont}>
                        <TouchableOpacity style={styles.lbtn} onPress={this.liked_movies}>
                            <Icon
                                name={'check'}
                                type={'entypo'}
                                size={RFValue(30)}
<<<<<<< HEAD
                                color={"#FFFFFF"}
=======
                                color={"#76FF03"}
>>>>>>> 247ce3cd6cb3041efa6b8489c5c2ec01ad28f039

                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.dbtn} onPress={this.disliked_movies}>
                            <Icon
<<<<<<< HEAD
                                name={'cross'}
                                type={'entypo'}
                                size={RFValue(30)}
                                color={"#FFFFFF"}
=======
                                name={'check'}
                                type={'entypo'}
                                size={RFValue(30)}
                                color={"#FF1744"}
>>>>>>> 247ce3cd6cb3041efa6b8489c5c2ec01ad28f039
                            />
                        </TouchableOpacity>
                    </View>
                    <View styles={styles.dnwbtncont}>
                        <TouchableOpacity style={styles.dnwbtn} onPress={this.notwatched_movies}>
                            <Text style={styles.dnwtxt}>
                                Did not watch
                            </Text>
                        </TouchableOpacity>
                    </View>
<<<<<<< HEAD
                
=======
                </View>
>>>>>>> 247ce3cd6cb3041efa6b8489c5c2ec01ad28f039
            </View>
        );
    }

}
const styles=StyleSheet.create({
    container:{
        flex:1
<<<<<<< HEAD
    },
    imgContainer:{
        alignContent: 'center',
        alignItems: 'center',
        margin: RFValue(20)
    },
    image:{
        height:RFValue(300),
        width:RFValue(300),
        borderRadius:RFValue(30),
        resizeMode:'contain'
    },
    titleContainer:{
        alignItems:'center',
    },
    title:{
        fontSize:RFValue(25),
        fontWeight:'bold',
    },
    time:{
        alignItems:'center',
        marginTop:RFValue(10),
        marginBottom:RFValue(0)
    },
    tx:{
        fontSize:RFValue(16),
    },
    ratingContainer: {
        marginTop:RFValue(0),
    },
    overviewContainer:{
        height:RFValue(100),
        width:RFValue(350),
        alignSelf:'center',
    },
    overviewtext:{
        fontSize:RFValue(16),
        textAlign:'center',
    },
    ldbtncont:{
        // backgroundColor:'blue',
        height:RFValue(140),
        width:RFValue(350),
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-around'
        
        
    },
    lbtn:{
        backgroundColor:'#76FF03',
        borderRadius:RFValue(50),
        width:RFValue(60),
        height:RFValue(60),
        justifyContent:'center',
        alignItems:'center',
    },
    dbtn:{
        backgroundColor:'#FF1744',
        borderRadius:RFValue(50),
        width:RFValue(60),
        height:RFValue(60),
        justifyContent:'center',
        alignItems:'center',
    },
    dnwbtncont:{
    },
    dnwbtn:{
        borderWidth:RFValue(2),
        borderRadius:RFValue(8),
        width:RFValue(180)
    },
    dnwtxt:{
        fontSize:RFValue(20),
        textAlign:'center',
    }
})
=======
    }
})
>>>>>>> 247ce3cd6cb3041efa6b8489c5c2ec01ad28f039
