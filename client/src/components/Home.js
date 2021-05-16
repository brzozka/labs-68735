import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const Home = () => (
  <Paper
    style={{
      padding: '2.5em',
      margin: '2.5em',
    }}>
    <Typography variant="h4">My Todo App for Class</Typography>
    <Typography variant="body1">Welcome to our ToDo App</Typography>
  </Paper>
);

export default Home;