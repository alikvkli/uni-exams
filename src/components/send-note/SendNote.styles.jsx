import { styled } from "@mui/material/styles";


export const SendNoteContainer = styled("div")(({theme}) => ({
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
}))

export const ButtonContainer = styled("div")(({theme}) => ({
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between"
}));