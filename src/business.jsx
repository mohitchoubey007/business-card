// Business.js
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
function handledownload(){
    const input = document.getElementById('pdf'); 
    // Specify the id of the element you want to convert to PDF
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('downloaded-file.pdf');
      })

}

function Business(props) {
    const name = props.name;
    const details = props.details;

    return (
       
        <div style={{
            paddingTop: "150px",
            display: "flex",
            justifyContent: "center",
        }} >
            <div style={{
                display: "flex",
                justifyContent: "center",
                marginRight: "20",
                width: "400",
                
            }}>
                <Card style={{
                    width: "500",
                    height: "200",
                    id:'pdf'
                }}>
                    <div style={{
                        marginBottom: "20px",
                        marginRight: "20px",
                        marginLeft: "20px",
                        marginTop: "20px"
                    }} id='pdf'>
                        <Typography  variant="h5">Hi, My name is {name} </Typography>
                        <br></br>
                       
                        <Typography variant='h6'>{details}</Typography>
                        <br />
                        
                        <Box
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                p: 1,
                                m: 1,
                                bgcolor: 'background.paper',
                                borderRadius: 1,
                            }}
                        >
                            <Button variant='contained' style={{ marginLeft: "20px", marginRight: "20px" }}>LinkedIn</Button>
                            <Button variant='contained' style={{ marginRight: "20px",marginRight:"20px" }}>Twitter</Button>
                            
                        </Box>
                    </div>
                </Card>
               
            </div>
            <Button variant='contained' style={{ marginRight: "20px"}} onClick={handledownload}>Download</Button>
        </div>
    )
}

export default Business;
