import { Box, Container, Typography, Paper, Button, Grid, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import SaveIcon from '@mui/icons-material/Save';
import PreviewIcon from '@mui/icons-material/Preview';
import CodeIcon from '@mui/icons-material/Code';

const EditorContainer = styled(Paper)(({ theme }) => ({
  backgroundColor: '#29282bd7',
  backdropFilter: 'blur(10px)',
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  color: '#ffffff',
  minHeight: '80vh',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
}));

const EditorToolbar = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
  flexWrap: 'wrap',
}));

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  color: '#ffffff',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  '& .MuiSvgIcon-root': {
    marginRight: theme.spacing(1),
  },
}));

const EditorBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderRadius: theme.spacing(2),
  padding: theme.spacing(3),
  flex: 1,
  minHeight: '400px',
}));

const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    color: '#ffffff',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.5)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#b388ff',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
}));

const EmbedEditor = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#5b127fa1',
        paddingTop: '80px',
        paddingBottom: '40px',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'left', mb: 4 }}>
          <Typography 
            variant="h1" 
            component="h1" 
            gutterBottom
            sx={{
              fontSize: '4rem',
              fontWeight: 'bold',
              color: '#ffffff'
            }}
          >
            Vista Previa de Editor
          </Typography>
        </Box>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'flex-start',
        }}>
          <Box
            component="img"
            src="/Imagen de Editor.png"
            alt="Editor"
            sx={{
              width: '35%',
              height: 'auto',
              borderRadius: '16px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              marginBottom: '20px',
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default EmbedEditor; 