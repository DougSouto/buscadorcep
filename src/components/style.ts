import { styled } from "@stitches/react"

export const Main = styled('main', {
  background: '#121212',
  width: '100%',
  maxWidth: '700px',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyItems: 'center',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  padding: '1.75rem',
  borderRadius: '10px',

  '& > div': {
    width: '100%',
    display: 'flex',
    gap: '1rem',
    input: {
        flex: 1,
        width: '100%',
    }
  },
})

export const AdressForm = styled('form', {
  width: '100%',
  marginTop: '1rem',
  gap: '1rem',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'self-start',

  div: {
    display: 'flex',
    flexDirection: 'column',
  },
})

export const ButtonPrimary = styled('button', {
  margin: '.5rem',
  padding: '1rem',
  borderRadius: '10px',
  color: '#ffffff',
  backgroundColor: '#6200EE',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '#2700EE',
  },
})

export const OtherButton = styled('button', {
  margin: '.5rem',
  padding: '1rem',
  borderRadius: '10px',
  color: '#ffffff',
  backgroundColor: '#3700B3',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '#0A00B3',
  },
})
