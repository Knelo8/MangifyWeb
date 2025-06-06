import { Box, Container, Typography } from '@mui/material';

const EmbedViewer = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#5b127fa1',
        paddingTop: '80px',
        paddingBottom: '40px',
      }}
    >
      <Container maxWidth="lg" sx={{ paddingRight: 0 }}>
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
            Vista Previa
          </Typography>
        </Box>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'flex-end',
        }}>
          <Box
            component="img"
            src="/Imagen de Visualizador.png"
            alt="Visualizador"
            sx={{
              width: '60%',
              height: 'auto',
              borderRadius: '16px 0 0 16px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default EmbedViewer; 