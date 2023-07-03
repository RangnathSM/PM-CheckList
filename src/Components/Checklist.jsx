import Button from '@mui/material/Button';
import { Typography, TextField } from '@mui/material';
import { Box } from '@mui/system';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import '../Styles/Checklist.css'
import { useState } from 'react';

const CheckList = () => {

  let [category, setCategory] = useState('')
  let [asset, setAsset] = useState('')
  let [srnumber, setSrnumber] = useState()
  let [model, setModel] = useState()
  let [done , setDone] = useState()
  let [due, setDue] = useState()
  let [remark, setRemark] = useState()
  let [doneby, setDoneby] = useState()
  let [buttons, setButtons] = useState(null)
  
  let handleselect = (e)=> {
      e.preventDefault();
  }
  
  let handleClick = (buttons)=>{
    setButtons(buttons);
  }

  let handleCategory = (e)=>
  {
    setCategory(e.target.value);
  }
  let handleAsset =(e)=>{
    setAsset(e.target.value)
  }
  
  let handleSearch = (e)=>{
    e.preventDefault()
  }

  let handleSave = (e) =>{
    e.preventDefault()
  }

    return ( 
        <Box sx={{background:'#FAF5EE', width:{xl:"100%",lg:"100%",md:"100%",sm:"100%",xs:"100%"}, height:{xl:"100%",lg:"100%",md:"100%",sm:"100%",xs:"100%"}}}>
          <Typography sx={{fontSize:"24px", fontWeight:"500", color:"#FF731D" }} width="176px" height="36px" marginLeft={{xl:"250px", lg:'80px', md:'10px', sm:'10px',xs:'10px'}}>PM  Check List</Typography>
          <Box sx={{background:'#FFFFFF',width:{xl:'1030px',lg:"1030px",md:"900px",sm:"600px",xs:"480px"}, height:{xl:'1340px',lg:"1340px",md:"900px",sm:"800px",xs:"800px"},marginLeft:{xl:"250px", lg:'80px', md:'0px'}, borderRadius:'16px', marginTop:'20px'}} >
            <Box width={{xl:'1030px',lg:"1030px",md:"900px",sm:"600px",xs:"480px"}} display={{xl:'flex', lg:'flex', md:'flex', sm:'block', xs:'block' }}>
                   <Button   onClick={() => handleClick('critical')} variant="outlined" type='select' sx={{borderRadius:'30px',":hover":{color:"#FF731D",borderColor:"#FF731D"},fontSize:{xl:"18px",lg:"18px",md:"16px",sm:"16px",xs:"16px"},marginLeft:{xl:'25px',lg:"25px",md:"20px",sm:"65px",xs:"10px"},marginTop:'20px',width:{xl:"245px",lg:"245px",md:"200px",sm:"230px",xs:"230px"}, height:'60px', textTransform:'none', color: buttons === 'critical' ? '#FF731D' : '#212427',border: buttons === 'critical' ? '2px solid #FF731D' : '1px solid #212427'}}>Critical Care ASSETS</Button>
                    <Button  onClick={() => handleClick('ot')} variant="outlined" type='select' sx={{borderRadius:'30px',":hover":{color:"#FF731D",borderColor:"#FF731D"},fontSize:{xl:"18px",lg:"18px",md:"16px",sm:"16px",xs:"16px"}, marginLeft:'10px',marginTop:'20px',width:{xl:"232px",lg:"232px",md:"210px",sm:"220px",xs:"220px"}, height:'60px', textTransform:'none',color: buttons === 'ot' ? '#FF731D' : '#212427',border: buttons === 'ot' ? '2px solid #FF731D' : '1px solid #212427'}}>OT Assets</Button>
                    <Box     display={{xl:'flex', lg:'flex', md:'flex', sm:'flex', xs:'flex' }} marginLeft={{xl:'0px',lg:"0px",md:"0px",sm:"60px",xs:"5px"}}>
                    <Button  onClick={() => handleClick('lab')} variant="outlined" type='select' sx={{borderRadius:'30px',":hover":{color:"#FF731D",borderColor:"#FF731D"},fontSize:{xl:"18px",lg:"18px",md:"16px",sm:"16px",xs:"16px"}, marginLeft:'10px',marginTop:'20px',width:{xl:"232px",lg:"232px",md:"210px",sm:"220px",xs:"220px"}, height:'60px', textTransform:'none',color: buttons === 'lab' ? '#FF731D' : '#212427',border: buttons === 'lab' ? '2px solid #FF731D' : '1px solid #212427'}}>Laboratory</Button>
                    <Button  onClick={() => handleClick('radio')} variant="outlined" type='select' sx={{borderRadius:'30px',":hover":{color:"#FF731D",borderColor:"#FF731D"},fontSize:{xl:"18px",lg:"18px",md:"16px",sm:"16px",xs:"16px"}, marginLeft:'10px',marginTop:'20px',width:{xl:"232px",lg:"232px",md:"210px",sm:"220px",xs:"220px"}, height:'60px', textTransform:'none',color: buttons === 'radio' ? '#FF731D' : '#212427',border: buttons === 'radio' ? '2px solid #FF731D' : '1px solid #212427'}}>Radiology</Button>
                    </Box>
                    </Box>
                <Box marginTop='20px'  marginLeft={{xl:'15px', lg:'15px', md:'10px', sm:'45px', xs:'-10px'}} display={{xl:'flex', lg:'flex', md:'flex', sm:'block', xs:'block' }} >
                <FormControl  style={{ m: 1, minWidth:484,  borderRadius:'10px',borderColor:'#1746A2', height:'60px', marginLeft:'10px' }}>
                       
                       <Select
                       value={category}
                       onChange={handleCategory}
                       displayEmpty
                       sx={{color:'#1746A2',fontFamily:'Poppins',fontSize:'20px',fontWeight:'500','& .MuiOutlinedInput-notchedOutline': {
                         borderColor: '#1746A2', borderRadius:'10px',}}}
                     ><MenuItem value="">
                     <FormLabel style={{color:'#1746A2',fontFamily:'Poppins',fontSize:'20px',fontWeight:'500'}}>Category</FormLabel>
                   </MenuItem>
                      {buttons === 'critical' && (
                         <div>
                       <MenuItem sx={{color:'#1746A2',fontFamily:'Poppins',fontSize:'18px',fontWeight:'500'}} value={1}>ICU</MenuItem>
                       <MenuItem sx={{color:'#1746A2',fontFamily:'Poppins',fontSize:'18px',fontWeight:'500'}} value={2}>NICU</MenuItem>
                       <MenuItem sx={{color:'#1746A2',fontFamily:'Poppins',fontSize:'18px',fontWeight:'500'}} value={3}>CCU</MenuItem>
                       <MenuItem sx={{color:'#1746A2',fontFamily:'Poppins',fontSize:'18px',fontWeight:'500'}} value={3}>SICU</MenuItem>
                       <MenuItem sx={{color:'#1746A2',fontFamily:'Poppins',fontSize:'18px',fontWeight:'500'}} value={3}>MICU</MenuItem>
                       <MenuItem sx={{color:'#1746A2',fontFamily:'Poppins',fontSize:'18px',fontWeight:'500'}} value={3}>General Ward</MenuItem>
                         </div>
                          )}
                          {buttons === 'ot' && (
                          <div>
                       <MenuItem sx={{color:'#1746A2',fontFamily:'Poppins',fontSize:'18px',fontWeight:'500'}} value={1}>Minor</MenuItem>
                       <MenuItem sx={{color:'#1746A2',fontFamily:'Poppins',fontSize:'18px',fontWeight:'500'}} value={2}>Major</MenuItem>
                       <MenuItem sx={{color:'#1746A2',fontFamily:'Poppins',fontSize:'18px',fontWeight:'500'}} value={3}>Gynecology</MenuItem>
                       <MenuItem sx={{color:'#1746A2',fontFamily:'Poppins',fontSize:'18px',fontWeight:'500'}} value={3}>Orthopedic</MenuItem>
                          </div>
                          )}
                     </Select>
                </FormControl>
               
                <Box marginTop={{xl:'0px', lg:'0px', md:'0px', sm:'10px', xs:'10px'}} >
                <FormControl style={{   minWidth:484, borderRadius:'10px', borderColor:'#1746A2', height:'60px', marginLeft:'10px' }}  >
                    <Select
                    value={asset}
                    onChange={handleAsset}
                    displayEmpty
                    sx={{color:'#1746A2',fontFamily:'Poppins',fontSize:'20px',fontWeight:'500','& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#1746A2', borderRadius:'10px'}}}
                  ><MenuItem value="">
                  <FormLabel style={{color:'#1746A2',fontFamily:'Poppins',fontSize:'20px',fontWeight:'500'}}>Asset List</FormLabel>
                </MenuItem>
                {buttons === 'critical' && (
                    <div>
                    <MenuItem sx={{color:'#1746A2',fontFamily:'Poppins',fontSize:'18px',fontWeight:'500'}} value={3}>Asset 3</MenuItem>
                    <MenuItem sx={{color:'#1746A2',fontFamily:'Poppins',fontSize:'18px',fontWeight:'500'}} value={4}>Asset 4</MenuItem>
                    <MenuItem sx={{color:'#1746A2',fontFamily:'Poppins',fontSize:'18px',fontWeight:'500'}} value={5}>Asset 5</MenuItem>
                    <MenuItem sx={{color:'#1746A2',fontFamily:'Poppins',fontSize:'18px',fontWeight:'500'}} value={5}>Asset 7</MenuItem>
                    <MenuItem sx={{color:'#1746A2',fontFamily:'Poppins',fontSize:'18px',fontWeight:'500'}} value={5}>Asset 9</MenuItem>
                    </div>
                     )}
                      {buttons === 'ot' && (
                     <div>
                     <MenuItem sx={{color:'#1746A2',fontFamily:'Poppins',fontSize:'18px',fontWeight:'500'}} value={3}>Asset 1</MenuItem>
                    <MenuItem sx={{color:'#1746A2',fontFamily:'Poppins',fontSize:'18px',fontWeight:'500'}} value={4}>Asset 2</MenuItem>
                    <MenuItem sx={{color:'#1746A2',fontFamily:'Poppins',fontSize:'18px',fontWeight:'500'}} value={5}>Asset 6</MenuItem>
                    <MenuItem sx={{color:'#1746A2',fontFamily:'Poppins',fontSize:'18px',fontWeight:'500'}} value={5}>Asset 8</MenuItem>
                    <MenuItem sx={{color:'#1746A2',fontFamily:'Poppins',fontSize:'18px',fontWeight:'500'}} value={5}>Asset 22</MenuItem>
                     </div>
                      )}
                  </Select>
                </FormControl>
                </Box>
                </Box>
                <Box marginTop='20px' sx={{marginLeft:{xl:'415px', lg:'415px', md:'350px',sm:'200px', xs:'135px'},width:'192px'}} >
                    <Button variant='contained' onClick={handleSearch} sx={{borderRadius:'35px',background:'#1746A2',width:'192px',height:'55px',fontSize:'18px', fontWeight:'400', textTransform:'none'}} >Search</Button>
                </Box>
                <Box sx={{width:{xl:"938px",lg:"938px",md:"850px",sm:"550px",xs:"430px"},height:{xl:"997px",lg:"997px",md:"997px",sm:"1350px",xs:"1250px"},boxShadow:'2px 4px 4px 0px #00000040'}}  border='1px solid #21242780' borderRadius='30px' marginLeft={{xl:'45px',lg:"45px",md:"25px",sm:"25px",xs:"25px"}} marginTop='20px'>
                   <Box  marginTop='30px' sx={{marginLeft:{xl:'20px', lg:'20px', md:'-10px'}}} >
                   <form action="" onselect={handleselect}>
                      <Box display={{xl:'flex', lg:'flex', md:'flex', sm:'block', xs:'block' }}>
                      <Box marginLeft={{xl:'20px', lg:'20px', md:'20px', sm:'80px', xs:'30px'}}>
                       <Typography sx={{fontSize:'18px', fontWeight:'500', color:'#1746A2'}}><label >Serial Number</label></Typography>
                       <TextField value={srnumber} sx={{width:'370px', height:'55px',border: '1px solid #7E7E7E4D', borderRadius:'6px', background:'#EFF5FE'}} onChange={(e)=>setSrnumber(e.target.value)}></TextField>
                       </Box>
                       <Box marginLeft={{xl:'80px', lg:'80px', md:'80px', sm:'80px', xs:'30px'}}>
                       <Typography sx={{fontSize:'18px', fontWeight:'500', color:'#1746A2'}}><label >Model Number</label></Typography>
                       <TextField value={model} sx={{width:'370px', height:'55px',border: '1px solid #7E7E7E4D', borderRadius:'6px', background:'#EFF5FE'}} onChange={(e)=>setModel(e.target.value)}></TextField>
                       </Box>
                      </Box>
                      <Box marginTop='20px'  display={{xl:'flex', lg:'flex', md:'flex', sm:'block', xs:'block' }}>
                      <Box marginLeft={{xl:'20px', lg:'20px', md:'20px', sm:'80px', xs:'30px'}}>
                       <Typography sx={{fontSize:'18px', fontWeight:'500', color:'#1746A2'}}><label >PM Done Date</label></Typography>
                       <TextField value={done} sx={{width:'370px', height:'55px',border: '1px solid #7E7E7E4D', borderRadius:'6px', background:'#EFF5FE'}} onChange={(e)=>setDone(e.target.value)}></TextField>
                       </Box>
                       <Box marginLeft={{xl:'80px', lg:'80px', md:'80px', sm:'80px', xs:'30px'}}>
                       <Typography sx={{fontSize:'18px', fontWeight:'500', color:'#1746A2'}}><label >PM Due Date</label></Typography>
                       <TextField value={due} sx={{width:'370px', height:'55px',border: '1px solid #7E7E7E4D', borderRadius:'6px', background:'#EFF5FE'}} onChange={(e)=>setDue(e.target.value)}></TextField>
                       </Box>
                      </Box>
                      <Box width={{xl:'820px', lg:'820px',md:'800px', sm:'500px'}} height={{xl:'282px'}} marginTop='20px'marginLeft={{xl:'20px', lg:'20px', md:'20px',sm:'20px',xs:'32px'}} >
                      <Typography width='130px'height='33px' marginLeft={{xl:'0px', lg:'0px', md:'0px', sm:'60px'}} sx={{fontSize:"22px", fontWeight:"500", color:"#1746A2"}}>Parameters</Typography>
                      <Box display={{xl:'flex', lg:'flex', md:'flex', sm:'block', xs:'block' }}>
                      <FormLabel id="demo-row-radio-buttons-group-label" sx={{marginTop:{xl:'8px', lg:'8px', md:'8px', sm:'15px'},marginLeft:{xl:'0px', lg:'0px', md:'0px', sm:'60px'},fontSize:{xl:'20px', lg:'20px', md:'20px', sm:'18px',xs:'16px'}, fontWeight:'400',color:'#212427'}}>AC MAINS/POWER CORD</FormLabel>
                        <Box marginLeft={{xl:'250px',lg:'250px', md:'250px',sm:'60px'}}>
                        <FormControl >
                        <RadioGroup 
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group" >
                            <FormControlLabel value="pass" control={<Radio />}  label="Pass" />
                            <FormControlLabel value="fail" control={<Radio />} label="Fail" />
                        </RadioGroup>
                        </FormControl>
                        </Box>
                      </Box>
                      <Box display={{xl:'flex', lg:'flex', md:'flex', sm:'block', xs:'block' }}>
                      <FormLabel id="demo-row-radio-buttons-group-label" sx={{marginTop:'8px',marginLeft:{xl:'0px', lg:'0px', md:'0px', sm:'60px'},fontSize:{xl:'20px', lg:'20px', md:'20px', sm:'18px',xs:'16px'}, fontWeight:'400',color:'#212427'}}>KEYPAD</FormLabel>
                        <Box marginLeft={{xl:'415px',lg:'415px', md:'415px',sm:'60px'}}>
                        <FormControl >
                        <RadioGroup 
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group" >
                            <FormControlLabel value="pass" control={<Radio />}  label="Pass" />
                            <FormControlLabel value="fail" control={<Radio />} label="Fail" />
                        </RadioGroup>
                        </FormControl>
                        </Box>
                      </Box>
                      <Box display={{xl:'flex', lg:'flex', md:'flex', sm:'block', xs:'block' }}>
                      <FormLabel id="demo-row-radio-buttons-group-label" sx={{marginTop:'8px',marginLeft:{xl:'0px', lg:'0px', md:'0px', sm:'60px'},fontSize:{xl:'20px', lg:'20px', md:'20px', sm:'18px',xs:'16px'}, fontWeight:'400',color:'#212427'}}>DISPLAY</FormLabel>
                        <Box marginLeft={{xl:'412px',lg:'412px', md:'412px',sm:'60px'}}>
                        <FormControl >
                        <RadioGroup 
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group" >
                            <FormControlLabel value="pass" control={<Radio />}  label="Pass" />
                            <FormControlLabel value="fail" control={<Radio />} label="Fail" />
                        </RadioGroup>
                        </FormControl>
                        </Box>
                      </Box>
                      <Box display={{xl:'flex', lg:'flex', md:'flex', sm:'block', xs:'block' }}>
                      <FormLabel id="demo-row-radio-buttons-group-label" sx={{marginTop:'8px',marginLeft:{xl:'0px', lg:'0px', md:'0px', sm:'60px'},fontSize:{xl:'20px', lg:'20px', md:'20px', sm:'18px',xs:'16px'}, fontWeight:'400',color:'#212427'}}>FOOT SWITCH</FormLabel>
                        <Box marginLeft={{xl:'354px',lg:'354px', md:'354px',sm:'60px'}}>
                        <FormControl >
                        <RadioGroup 
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group" >
                            <FormControlLabel value="pass" control={<Radio />}  label="Pass" />
                            <FormControlLabel value="fail" control={<Radio />} label="Fail" />
                        </RadioGroup>
                        </FormControl>
                        </Box>
                      </Box>
                      <Box display={{xl:'flex', lg:'flex', md:'flex', sm:'block', xs:'block' }}>
                      <FormLabel id="demo-row-radio-buttons-group-label" sx={{marginTop:'8px',marginLeft:{xl:'0px', lg:'0px', md:'0px', sm:'60px'},fontSize:{xl:'20px', lg:'20px', md:'20px', sm:'18px',xs:'16px'}, fontWeight:'400',color:'#212427'}}>BIPLOAR& MONOPOLAR CABLE WORKING</FormLabel>
                        <Box marginLeft={{xl:'100px',lg:'100px', md:'100px',sm:'60px'}}>
                        <FormControl >
                        <RadioGroup 
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group" >
                            <FormControlLabel value="pass" control={<Radio />}  label="Pass" />
                            <FormControlLabel value="fail" control={<Radio />} label="Fail" />
                        </RadioGroup>
                        </FormControl>
                        </Box>
                      </Box>
                      <Box display={{xl:'flex', lg:'flex', md:'flex', sm:'block', xs:'block' }}>
                      <FormLabel id="demo-row-radio-buttons-group-label" sx={{marginTop:'8px',marginLeft:{xl:'0px', lg:'0px', md:'0px', sm:'60px'},fontSize:{xl:'20px', lg:'20px', md:'20px', sm:'18px',xs:'16px'}, fontWeight:'400',color:'#212427'}}>BATTERY BACK UP</FormLabel>
                        <Box marginLeft={{xl:'318px',lg:'318px', md:'318px',sm:'60px'}}>
                        <FormControl >
                        <RadioGroup 
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group" >
                            <FormControlLabel value="pass" control={<Radio />}  label="Pass" />
                            <FormControlLabel value="fail" control={<Radio />} label="Fail" />
                        </RadioGroup>
                        </FormControl>
                        </Box>
                      </Box>
                      <Box display={{xl:'flex', lg:'flex', md:'flex', sm:'block', xs:'block' }}>
                      <FormLabel id="demo-row-radio-buttons-group-label" sx={{marginTop:'8px',marginLeft:{xl:'0px', lg:'0px', md:'0px', sm:'60px'},fontSize:{xl:'20px', lg:'20px', md:'20px', sm:'18px',xs:'16px'}, fontWeight:'400',color:'#212427'}}>CHECK FOR PROPER WORKING OF ALARMS</FormLabel>
                        <Box marginLeft={{xl:'88px',lg:'88px', md:'88px',sm:'60px'}}>
                        <FormControl >
                        <RadioGroup 
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group" >
                            <FormControlLabel value="pass" control={<Radio />}  label="Pass" />
                            <FormControlLabel value="fail" control={<Radio />} label="Fail" />
                        </RadioGroup>
                        </FormControl>
                        </Box>
                      </Box>
                      </Box>
                      <Box display={{xl:'flex', lg:'flex', md:'flex', sm:'block', xs:'block' }} marginTop={{xl:'120px', lg:'120px', md:'120px', sm:'50px'}}>
                      <Box marginLeft={{xl:'20px', lg:'20px', md:'20px', sm:'80px', xs:'30px'}}>
                       <Typography sx={{fontSize:'18px', fontWeight:'500', color:'#1746A2'}}><label >Remark</label></Typography>
                       <TextField value={remark} sx={{width:'370px', height:'55px',border: '1px solid #7E7E7E4D', borderRadius:'6px', background:'#EFF5FE'}} onChange={(e)=>setRemark(e.target.value)}></TextField>
                       </Box>
                       <Box marginLeft={{xl:'80px', lg:'80px', md:'80px', sm:'80px', xs:'30px'}}>
                       <Typography sx={{fontSize:'18px', fontWeight:'500', color:'#1746A2'}}><label >Done By</label></Typography>
                       <TextField value={doneby} sx={{width:'370px', height:'55px',border: '1px solid #7E7E7E4D', borderRadius:'6px', background:'#EFF5FE'}} onChange={(e)=>setDoneby(e.target.value)}></TextField>
                       </Box>
                      </Box>
                      <Box marginTop={{xl:'80px', lg:'80px', md:'80px', sm:'60px',xs:'40px'}} marginLeft={{xl:'330px', lg:'330px',md:'330px', sm:'180px', xs:'120px'}} >
                    <Button variant='contained' onClick={handleSave} sx={{borderRadius:'35px',background:'#1746A2',width:'192px',height:'55px',fontSize:'18px', fontWeight:'400', textTransform:'none'}} >Save</Button>
                </Box>
                <Box>
                <Button variant="outlined" download='Download' type='button' sx={{borderRadius:'35px',color:'#FF731D',borderColor:'#FF731D',fontSize:'18px',marginLeft:{xl:'313px', lg:'313px',md:'313px', sm:'165px',xs:'103px'},marginTop:'20px',marginBottom:'20px',width:'224px', height:'55px',":hover":{borderColor:'#FF731D'}, textTransform:'none'}}>Download PDF<FileDownloadOutlinedIcon style={{marginLeft:'10px'}}></FileDownloadOutlinedIcon></Button>
                </Box>
                    </form>
                   </Box>
                </Box>
            </Box>
        </Box>
     );
}
 
export default CheckList;