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
        <Box sx={{background:'#FAF5EE', width:'100%', height:'100%'}}>
            <Box marginLeft='250px'>
            <Typography sx={{fontSize:"24px", fontWeight:"500", color:"#FF731D", width:'100%'}}>PM  Check List</Typography>
            <Box sx={{background:'#FFFFFF',width:'1030px', height:'1340px', borderRadius:'16px'}} >
                <Box sx={{marginTop:'10px', marginLeft:'16px'}}>
                   <Button   onClick={() => handleClick('critical')} variant="outlined" type='select' sx={{borderRadius:'30px',":hover":{color:"#FF731D",borderColor:"#FF731D"},fontSize:'18px',marginLeft:'10px',marginTop:'20px',width:'245px', height:'60px', textTransform:'none', color: buttons === 'critical' ? '#FF731D' : '#212427',border: buttons === 'critical' ? '2px solid #FF731D' : '1px solid #212427'}}>Critical Care ASSETS</Button>
                    <Button  onClick={() => handleClick('ot')} variant="outlined" type='select' sx={{borderRadius:'30px',":hover":{color:"#FF731D",borderColor:"#FF731D"},fontSize:'18px', marginLeft:'10px',marginTop:'20px',width:'232px', height:'60px', textTransform:'none',color: buttons === 'ot' ? '#FF731D' : '#212427',border: buttons === 'ot' ? '2px solid #FF731D' : '1px solid #212427'}}>OT Assets</Button>
                    <Button  onClick={() => handleClick('lab')} variant="outlined" type='select' sx={{borderRadius:'30px',":hover":{color:"#FF731D",borderColor:"#FF731D"},fontSize:'18px', marginLeft:'10px',marginTop:'20px',width:'232px', height:'60px', textTransform:'none',color: buttons === 'lab' ? '#FF731D' : '#212427',border: buttons === 'lab' ? '2px solid #FF731D' : '1px solid #212427'}}>Laboratory</Button>
                    <Button  onClick={() => handleClick('radio')} variant="outlined" type='select' sx={{borderRadius:'30px',":hover":{color:"#FF731D",borderColor:"#FF731D"},fontSize:'18px', marginLeft:'10px',marginTop:'20px',width:'232px', height:'60px', textTransform:'none',color: buttons === 'radio' ? '#FF731D' : '#212427',border: buttons === 'radio' ? '2px solid #FF731D' : '1px solid #212427'}}>Radiology</Button>
                </Box>
                <Box marginTop='20px' marginLeft='15px'>
                <FormControl style={{ m: 1, minWidth: 484, borderRadius:'10px',borderColor:'#1746A2', height:'60px', marginLeft:'10px' }}>
                    
                       <Select
                       value={category}
                       onChange={handleCategory}
                       displayEmpty
                       sx={{color:'#1746A2',fontFamily:'Poppins',fontSize:'20px',fontWeight:'500','& .MuiOutlinedInput-notchedOutline': {
                         borderColor: '#1746A2', borderRadius:'10px'}}}
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
                <FormControl style={{ m: 1, minWidth: 484, borderRadius:'10px', borderColor:'#1746A2', height:'60px', marginLeft:'10px' }}>
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
                <Box marginTop='20px' marginLeft='415px' >
                    <Button variant='contained' onClick={handleSearch} sx={{borderRadius:'35px',background:'#1746A2',width:'192px',height:'55px',fontSize:'18px', fontWeight:'400', textTransform:'none'}} >Search</Button>
                </Box>
                <Box width='938px' height='997px' border='1px solid #21242780' borderRadius='30px' marginLeft='45px' marginTop='20px'sx={{boxShadow:'2px 4px 4px 0px #00000040'}}>
                   <Box marginLeft='20px' marginTop='30px' >
                   <form action="" onselect={handleselect}>
                      <Box display='flex'>
                      <Box marginLeft='20px'>
                       <Typography sx={{fontSize:'18px', fontWeight:'500', color:'#1746A2'}}><label >Serial Number</label></Typography>
                       <TextField value={srnumber} sx={{width:'370px', height:'55px',border: '1px solid #7E7E7E4D', borderRadius:'6px', background:'#EFF5FE'}} onChange={(e)=>setSrnumber(e.target.value)}></TextField>
                       </Box>
                       <Box marginLeft='80px'>
                       <Typography sx={{fontSize:'18px', fontWeight:'500', color:'#1746A2'}}><label >Model Number</label></Typography>
                       <TextField value={model} sx={{width:'370px', height:'55px',border: '1px solid #7E7E7E4D', borderRadius:'6px', background:'#EFF5FE'}} onChange={(e)=>setModel(e.target.value)}></TextField>
                       </Box>
                      </Box>
                      <Box marginTop='20px' display='flex'>
                      <Box marginLeft='20px'>
                       <Typography sx={{fontSize:'18px', fontWeight:'500', color:'#1746A2'}}><label >PM Done Date</label></Typography>
                       <TextField value={done} sx={{width:'370px', height:'55px',border: '1px solid #7E7E7E4D', borderRadius:'6px', background:'#EFF5FE'}} onChange={(e)=>setDone(e.target.value)}></TextField>
                       </Box>
                       <Box marginLeft='80px'>
                       <Typography sx={{fontSize:'18px', fontWeight:'500', color:'#1746A2'}}><label >PM Due Date</label></Typography>
                       <TextField value={due} sx={{width:'370px', height:'55px',border: '1px solid #7E7E7E4D', borderRadius:'6px', background:'#EFF5FE'}} onChange={(e)=>setDue(e.target.value)}></TextField>
                       </Box>
                      </Box>
                      <Box width='820px' height='282px' marginTop='20px'marginLeft='20px' >
                      <Typography sx={{fontSize:"22px", fontWeight:"500", color:"#1746A2"}}>Parameters</Typography>
                      <Box display='flex'>
                      <FormLabel id="demo-row-radio-buttons-group-label" sx={{marginTop:'8px',fontSize:'20px', fontWeight:'400',color:'#212427'}}>AC MAINS/POWER CORD</FormLabel>
                        <Box marginLeft='250px'>
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
                      <Box display='flex'>
                      <FormLabel id="demo-row-radio-buttons-group-label" sx={{marginTop:'8px',fontSize:'20px', fontWeight:'400',color:'#212427'}}>KEYPAD</FormLabel>
                        <Box marginLeft='414px'>
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
                      <Box display='flex'>
                      <FormLabel id="demo-row-radio-buttons-group-label" sx={{marginTop:'8px',fontSize:'20px', fontWeight:'400',color:'#212427'}}>DISPLAY</FormLabel>
                        <Box marginLeft='412px'>
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
                      <Box display='flex'>
                      <FormLabel id="demo-row-radio-buttons-group-label" sx={{marginTop:'8px',fontSize:'20px', fontWeight:'400',color:'#212427'}}>FOOT SWITCH</FormLabel>
                        <Box marginLeft='354px'>
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
                      <Box display='flex'>
                      <FormLabel id="demo-row-radio-buttons-group-label" sx={{marginTop:'8px',fontSize:'20px', fontWeight:'400',color:'#212427'}}>BIPLOAR& MONOPOLAR CABLE WORKING</FormLabel>
                        <Box marginLeft='100px'>
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
                      <Box display='flex'>
                      <FormLabel id="demo-row-radio-buttons-group-label" sx={{marginTop:'8px',fontSize:'20px', fontWeight:'400',color:'#212427'}}>BATTERY BACK UP</FormLabel>
                        <Box marginLeft='318px'>
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
                      <Box display='flex'>
                      <FormLabel id="demo-row-radio-buttons-group-label" sx={{marginTop:'8px',fontSize:'20px', fontWeight:'400',color:'#212427'}}>CHECK FOR PROPER WORKING OF ALARMS</FormLabel>
                        <Box marginLeft='88px'>
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
                      <Box display='flex' marginTop='120px'>
                      <Box marginLeft='20px'>
                       <Typography sx={{fontSize:'18px', fontWeight:'500', color:'#1746A2'}}><label >Remark</label></Typography>
                       <TextField value={remark} sx={{width:'370px', height:'55px',border: '1px solid #7E7E7E4D', borderRadius:'6px', background:'#EFF5FE'}} onChange={(e)=>setRemark(e.target.value)}></TextField>
                       </Box>
                       <Box marginLeft='80px'>
                       <Typography sx={{fontSize:'18px', fontWeight:'500', color:'#1746A2'}}><label >Done By</label></Typography>
                       <TextField value={doneby} sx={{width:'370px', height:'55px',border: '1px solid #7E7E7E4D', borderRadius:'6px', background:'#EFF5FE'}} onChange={(e)=>setDoneby(e.target.value)}></TextField>
                       </Box>
                      </Box>
                      <Box marginTop='80px' marginLeft='330px' >
                    <Button variant='contained' onClick={handleSave} sx={{borderRadius:'35px',background:'#1746A2',width:'192px',height:'55px',fontSize:'18px', fontWeight:'400', textTransform:'none'}} >Save</Button>
                </Box>
                <Box>
                <Button variant="outlined" download='Download' type='button' sx={{borderRadius:'35px',color:'#FF731D',borderColor:'#FF731D',fontSize:'18px',marginLeft:'313px',marginTop:'20px',width:'224px', height:'55px',":hover":{borderColor:'#FF731D'}, textTransform:'none'}}>Download PDF<FileDownloadOutlinedIcon style={{marginLeft:'10px'}}></FileDownloadOutlinedIcon></Button>
                </Box>
                    </form>
                   </Box>
                </Box>
            </Box>
            </Box>
        </Box>
     );
}
 
export default CheckList;