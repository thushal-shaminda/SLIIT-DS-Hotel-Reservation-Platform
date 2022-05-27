import React from "react";
import "./taxihome.css"
import dotenv from "dotenv";
import {Link,} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
dotenv.config();


const taxihome=()=>{

    // const navigate=useNavigate();

    // const toreservation=()=>{
    //     navigate('/taxi/taxireserve',{state:{vehicleType:req.body.vehicleType}})
    // }

    // const toreservation=(e)=>{
    //     this.props.history.push({
    //     pathname:'/taxi/taxireserve', state:e  })}






    return(

        <div className="txxx">
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>
                <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
                <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


                <div class="container">
                    <br></br>
                    <h4>Select A Vehicle</h4>
                    <br></br>
                    <div class="row" id="ads">
                    
                    <div class="col-md-4">
                        <div class="card rounded">
                        <a href="http://localhost:3000/taxireserve"class="card-clickable"></a>
                            <div class="card-image">
                                <span class="card-notify-badge">Tuk</span>
                                <span class="card-notify-year">Rs.55</span>
                                <img class="img-fluid" src="https://i.postimg.cc/8z72BR8d/istockphoto-915779678-612x612.jpg" alt="Alternate Text" ></img>
                            </div>
                            <div class="card-image-overlay m-auto">
                                <span class="card-detail-badge">3 person</span>
                                <span class="card-detail-badge">Rs.55 per KM</span>
                                <span class="card-detail-badge">Without A/C</span>
                            </div>
                            <div class="card-body text-center">
                                <div class="ad-title m-auto">
                                    <h5>Honda Accord LX</h5>
                                </div>
                                <a class="ad-btn" href="#">View</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card rounded">
                        <a href="http://localhost:3000/taxireserve" class="card-clickable"></a>
                            <div class="card-image">
                                <span class="card-notify-badge">Budget-Taxi</span>
                                <span class="card-notify-year">65</span>
                                <img class="img-fluid" src="https://i.postimg.cc/7hPcC7M2/named-the-cheapest-car-the-world-this-tiny-FF-Model-ID9047-1-Tata-Nano-00.jpg" alt="Alternate Text" ></img>
                            </div>
                            <div class="card-image-overlay m-auto">
                                <span class="card-detail-badge">4 person</span>
                                <span class="card-detail-badge">Rs.65 per KM</span>
                                <span class="card-detail-badge">With A/C</span>
                            </div>
                            <div class="card-body text-center">
                                <div class="ad-title m-auto">
                                    <h5>Honda CIVIC HATCHBACK LS</h5>
                                </div>
                                <a class="ad-btn" href="#">View</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card rounded">
                        <a href="http://localhost:3000/taxireserve" class="card-clickable"></a>
                            <div class="card-image">
                                <span class="card-notify-badge">Comfort Car</span>
                                <span class="card-notify-year">85</span>
                                <img class="img-fluid" src="https://i.postimg.cc/65bsvHP5/1448656378-sedan.png" alt="Alternate Text" ></img>
                            </div>
                            <div class="card-image-overlay m-auto">
                                <span class="card-detail-badge">5 Person</span>
                                <span class="card-detail-badge">Rs.85 per KM</span>
                                <span class="card-detail-badge">With A/C</span>
                            </div>
                            <div class="card-body text-center">
                                <div class="ad-title m-auto">
                                    <h5>Honda Accord Hybrid LT</h5>
                                </div>
                                <a class="ad-btn" href="#">View</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card rounded">
                            <a href="http://localhost:3000/taxireserve" class="card-clickable"></a>
                            <div class="card-image">
                                <span class="card-notify-badge">Luxary Car</span>
                                <span class="card-notify-year">115</span>
                                <img class="img-fluid" src="https://i.postimg.cc/zBF6XpWN/istockphoto-858181030-170667a.jpg" alt="Alternate Text" ></img>
                            </div>
                            <div class="card-image-overlay m-auto">
                                <span class="card-detail-badge">Rs.115 per KM</span>
                                <span class="card-detail-badge">4 Person</span>
                                <span class="card-detail-badge">With A/C</span>
                            </div>
                            {/* <br></br>
                                <button type="button" class="btn btn-danger">Select</button> */}
                            <div class="card-body text-center">
                                <div class="ad-title m-auto">
                                    <h5>Honda Accord Hybrid LT</h5>
                                </div>
                                <a class="ad-btn" href="#">View</a>
                            </div>
                        </div>
                    </div>

        </div>
        </div>
        </div>








    );
};

export default taxihome;