import { Typography, Box, Stack, Grid, Button } from "@mui/material"
import { useState } from "react"
import { regValue } from "./components/Regex"




function App() { 

  const [text, setText] = useState<string>('0')

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>{

    let textContent: string|null = event.currentTarget.textContent;

    if(text === '0'){
      setText('')      
      setText(textContent!) 
    }
    else{
      setText(() => text + textContent)
    }
  }

  const handleCalculation = () => {

    let problem: string = regValue(text)    

    function calculation(value: string): string{

      return new Function('return ' + value)()
    }

    setText(calculation(problem))
  }

  const handleClear = (): void => {

    setText('0')
  }



  return (
    <Box className='bg-app' display='flex' justifyContent='center' alignItems='center' width='100%' height='100vh' >

      <Box justifyContent='center' alignItems='center' sx={{ width: '350px', height: '550px', margin: '0px', borderRadius: '20px', backgroundColor: 'black', boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', border: '3px solid #55bcc9'}}>

        <Box margin='auto' width='98%' height='120px' display='flex' justifyContent='flex-end' alignItems='flex-end' marginTop={1} sx={{ borderRadius: '8px', backgroundColor: 'black', border: '1px solid #B4B2AF', color: 'white', paddingBottom: '10px', paddingRight: '10px', fontSize: '40px', flexWrap: 'wrap'}}>

          <Typography variant="h4" sx={{ wordBreak: "break-word" }}>{text}</Typography>          

        </Box>

        <Stack margin='auto' marginTop={1} width='98%' height='' sx={{ borderRadius: '8px', backgroundColor: 'white', cursor: 'pointer'}} direction='column' spacing={1}>

          <Stack direction='row' spacing={1.5} justifyContent='center' sx={{ fontWeight: '900', fontSize: '20px'}}>

            <Box display='flex' width={70} height={70} justifyContent='center' alignItems='center' sx={{  borderRadius: '100%', backgroundColor: '#B4B2AF', color: 'black', cursor: 'pointer'}} onClick={handleClear}>C</Box>            
            <Box display='flex' justifyContent='center' alignItems='center' width={70} height={70} sx={{  borderRadius: '100%', backgroundColor: '#B4B2AF', cursor: 'pointer'}}>+/-</Box>
            <Box display='flex' justifyContent='center' alignItems='center' width={70} height={70} sx={{  borderRadius: '100%', backgroundColor: '#B4B2AF', cursor: 'pointer'}}>%</Box>
            <Box display='flex' justifyContent='center' alignItems='center' width={70} height={70} sx={{  borderRadius: '100%', backgroundColor: '#D99D0A', cursor: 'pointer'}} onClick={handleClick}>&divide;</Box>
            
          </Stack>

          <Stack direction='row' spacing={1.5} justifyContent='center' sx={{ fontWeight: '900', fontSize: '20px'}}>

            <Box display='flex' width={70} height={70} justifyContent='center' alignItems='center' sx={{  borderRadius: '100%', backgroundColor: '#B4B2AF', color: 'white', cursor: 'pointer'}} onClick={handleClick}>7</Box>            
            <Box display='flex' justifyContent='center' alignItems='center' width={70} height={70} sx={{  borderRadius: '100%', backgroundColor: '#B4B2AF', color: 'white', cursor: 'pointer'}} onClick={handleClick}>8</Box>
            <Box display='flex' justifyContent='center' alignItems='center' width={70} height={70} sx={{  borderRadius: '100%', backgroundColor: '#B4B2AF', color: 'white', cursor: 'pointer'}} onClick={handleClick}>9</Box>
            <Box display='flex' justifyContent='center' alignItems='center' width={70} height={70} sx={{  borderRadius: '100%', backgroundColor: '#D99D0A', color: 'white', cursor: 'pointer'}} onClick={handleClick}>*</Box>
            
          </Stack>

          <Stack direction='row' spacing={1.5} justifyContent='center' sx={{ fontWeight: '900', fontSize: '20px'}}>

            <Box display='flex' width={70} height={70} justifyContent='center' alignItems='center' sx={{  borderRadius: '100%', backgroundColor: '#B4B2AF', color: 'white', cursor: 'pointer'}} onClick={handleClick}>4</Box>            
            <Box display='flex' justifyContent='center' alignItems='center' width={70} height={70} sx={{  borderRadius: '100%', backgroundColor: '#B4B2AF', color: 'white', cursor: 'pointer'}} onClick={handleClick}>5</Box>
            <Box display='flex' justifyContent='center' alignItems='center' width={70} height={70} sx={{  borderRadius: '100%', backgroundColor: '#B4B2AF', color: 'white', cursor: 'pointer'}} onClick={handleClick}>6</Box>
            <Box display='flex' justifyContent='center' alignItems='center' width={70} height={70} sx={{  borderRadius: '100%', backgroundColor: '#D99D0A', color: 'white', cursor: 'pointer'}} onClick={handleClick}>-</Box>
           
          </Stack>

          <Stack direction='row' spacing={1.5} justifyContent='center' sx={{ fontWeight: '900', fontSize: '20px'}}>

            <Box display='flex' width={70} height={70} justifyContent='center' alignItems='center' sx={{  borderRadius: '100%', backgroundColor: '#B4B2AF', color: 'white', cursor: 'pointer'}} onClick={handleClick}>1</Box>            
            <Box display='flex' justifyContent='center' alignItems='center' width={70} height={70} sx={{  borderRadius: '100%', backgroundColor: '#B4B2AF', color: 'white', cursor: 'pointer'}} onClick={handleClick}>2</Box>
            <Box display='flex' justifyContent='center' alignItems='center' width={70} height={70} sx={{  borderRadius: '100%', backgroundColor: '#B4B2AF', color: 'white', cursor: 'pointer'}} onClick={handleClick}>3</Box>
            <Box display='flex' justifyContent='center' alignItems='center' width={70} height={70} sx={{  borderRadius: '100%', backgroundColor: '#D99D0A', color: 'white', cursor: 'pointer'}} onClick={handleClick}>+</Box>
            
          </Stack>

          <Stack direction='row' spacing={3} justifyContent='center' useFlexGap flexWrap='wrap' sx={{ fontWeight: '900', fontSize: '20px'}}>
            <Box display='flex' alignItems='center' alignContent='\' width={70} height={70} marginLeft={1} marginRight={1} sx={{ borderRadius: '55px', color: 'white', cursor: 'pointer', paddingLeft: '20px', backgroundColor: '#B4B2AF'}} flexGrow={2} onClick={handleClick}>0</Box>
            <Box display='flex' justifyContent='center' alignItems='center' width={70} height={70}  sx={{ borderRadius: '100%', color: 'white', cursor: 'pointer', backgroundColor: '#B4B2AF'}}  onClick={handleClick}>.</Box>
            <Box display='flex' justifyContent='center' alignItems='center' width={70} height={70} sx={{ borderRadius: '100%', color: 'white', cursor: 'pointer', backgroundColor: '#D99D0A'}} onClick={handleCalculation}>=</Box>
      
          </Stack>
          
        </Stack>

        
      </Box>
     
    </Box>
  )
}

export default App
