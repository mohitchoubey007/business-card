// Detail.js
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Business from './business';

function Detail() {
    const [name, setName] = useState("");
    const [details, setDetails] = useState("");
    const [cardGenerated, setCardGenerated] = useState(false);
   

    const generateCard = () => {
        setCardGenerated(true);
    };
    return (
        <div style={{
            paddingTop: "150px",
            display: "flex",
            justifyContent: "center",
        }}>
            {cardGenerated ? (
                <Business name={name} details={details} />
            ) : (
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    marginRight: "20",
                    width: "400"
                }}>
                    <Card style={{
                        width: "400",
                        height: "200"
                    }}>
                        <div style={{
                            marginBottom: "20px",
                            marginRight: "20px",
                            marginLeft: "20px",
                            marginTop: "20px"
                        }}>
                            <Typography variant="h5">Please enter your details</Typography>
                            <br />
                            <TextField
                                required
                                id="outlined-required"
                                label="Name"
                                defaultValue=""
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                            <br />
                            <br />
                            <TextField
                                required
                                id="outlined-required"
                                label="Business Details"
                                defaultValue=""
                                onChange={(e) => {
                                    setDetails(e.target.value);
                                }}
                            />
                            <br />
                            <br />
                            <Button variant='contained' style={{ marginLeft: "20px", marginRight: "30px" }} onClick={generateCard}>Generate your card</Button>
                        </div>
                    </Card>
                </div>
            )}
        </div>
    )
}

export default Detail;
